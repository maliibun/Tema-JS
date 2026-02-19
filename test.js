let codElev;
try {
    codElev = require('./index.js');
} catch (error) {
    console.log("Eroare: Fișierul index.js are o greșeală de sintaxă!");
    console.log("Mesajul erorii:", error.message);
    process.exit(1);
}

let testeTrecute = 0;
let totalTeste = 0;

function verificaEgalitate(obtinut, asteptat) {
    return JSON.stringify(obtinut) === JSON.stringify(asteptat);
}

async function testeaza(numeTest, numeFunctieElev, argumente, rezultatAsteptat, tipTestExtra = null) {
    totalTeste++;
    
    try {
        const functieElev = codElev[numeFunctieElev];
        if (typeof functieElev !== 'function') {
            console.log(`Picat: ${numeTest} -> Funcția lipsește.`);
            return;
        }

        const rezultatObtinut = await functieElev(...argumente);
        let trecut = verificaEgalitate(rezultatObtinut, rezultatAsteptat);

        // Validări extra pentru referințe (Capitolul 5)
        if (tipTestExtra === "referinta") {
            trecut = (rezultatObtinut === argumente[0]);
            if(!trecut) console.log(`Eroare: Nu ai returnat aceeași referință în memorie!`);
        } else if (tipTestExtra === "shallow") {
            trecut = verificaEgalitate(rezultatObtinut, argumente[0]) && 
                     (rezultatObtinut !== argumente[0]) && 
                     (rezultatObtinut.subObiect === argumente[0].subObiect);
            if(!trecut) console.log(`Eroare: Nu e un Shallow Copy valabil! Ai folosit {...obj}?`);
        } else if (tipTestExtra === "deep") {
            trecut = verificaEgalitate(rezultatObtinut, argumente[0]) && 
                     (rezultatObtinut !== argumente[0]) && 
                     (rezultatObtinut.subObiect !== argumente[0].subObiect);
            if(!trecut) console.log(`Eroare: Nu e un Deep Copy complet izolat! Ai folosit JSON.parse/stringify?`);
        }
        
        // Validare extra pentru ex 6.2 (Verificăm dacă returnează o funcție care chiar calculează suma)
        if (tipTestExtra === "returneaza_functie") {
            if (typeof rezultatObtinut !== 'function') {
                trecut = false;
                console.log(`Eroare: Funcția trebuia să returneze o altă FUNCȚIE, nu o valoare fixă!`);
            } else {
                trecut = (rezultatObtinut(5, 5) === 10);
                if(!trecut) console.log(`Eroare: Funcția returnată nu calculează corect suma!`);
            }
        }

        // Validare extra pentru 7.1
        if (tipTestExtra === "verifica_promise") {
            const tempRes = functieElev(argumente[0]);
            if (!(tempRes instanceof Promise)) {
                 trecut = false;
                 console.log(`Eroare: Funcția trebuia declarată cu 'async' pentru a returna o Promisiune!`);
            }
        }

        if (trecut) {
            console.log(`Trecut ${numeTest}`);
            testeTrecute++;
        } else {
            console.log(`Picat ${numeTest}`);
            if(!tipTestExtra) console.log(`      -> Returnat: ${JSON.stringify(rezultatObtinut)} | Așteptam: ${JSON.stringify(rezultatAsteptat)}`);
        }
    } catch (eroare) {
        console.log(`Eroare: ${numeTest} -> Codul a crăpat: ${eroare.message}`);
    }
}

async function ruleazaToateTestele() {
    console.log("Incepem Testele\n");

    // CAP 1
    await testeaza("1.1 String Templating", "s1_templating", ["Andrei", "12:00"], "Salut Andrei, este ora 12:00!");
    await testeaza("1.2 Înlocuire string", "s1_inlocuire", ["Sunt foarte trist", "trist", "fericit"], "Sunt foarte fericit");
    await testeaza("1.3 Despărțire (Split)", "s1_despartire", ["Mere,Pere,Prune"], ["Mere", "Pere", "Prune"]);

    // CAP 2
    await testeaza("2.1 Creare Obiect", "s2_creareObiect", ["Ana", 20], { nume: "Ana", varsta: 20 });
    await testeaza("2.2 Adaugă prop", "s2_adaugaProprietate", [{a:1}, "b", 2], {a:1, b:2});
    await testeaza("2.3 Șterge prop", "s2_stergeProprietate", [{x:10, y:20}, "x"], {y:20});

    // CAP 3
    await testeaza("3.1 Push și Pop", "s3_pushPop", [[1, 2, 3], 99], [1, 2, 99]);
    await testeaza("3.2 Slice", "s3_extragere", [[10, 20, 30, 40, 50], 1, 4], [20, 30, 40]);
    await testeaza("3.3 Join", "s3_transformareString", [["A", "B", "C"], "->"], "A->B->C");

    // CAP 4
    await testeaza("4.1 Este Truthy", "s4_isTruthy", ["Javascript"], true);
    await testeaza("4.2 Lista goală", "s4_isListaGoala", [[]], true);
    await testeaza("4.3 Numără Falsy", "s4_numaraFalsy", [[0, 1, "", "Salut", null]], 3);

    // CAP 5
    const objTest = { a: 1, subObiect: { b: 2 } };
    await testeaza("5.1 Referință (același loc din memorie)", "s5_referinta", [objTest], objTest, "referinta");
    await testeaza("5.2 Shallow Copy (...obj)", "s5_shallowCopy", [objTest], objTest, "shallow");
    await testeaza("5.3 Deep Copy", "s5_deepCopy", [objTest], objTest, "deep");

    // CAP 6
    await testeaza("6.1 Înmulțire", "s6_inmultire", [4, 5], 20);
    await testeaza("6.2 Arrow Function", "s6_returneazaArrow", [], null, "returneaza_functie");
    await testeaza("6.3 Aplică Callback", "s6_aplicaCallback", [10, (val) => val + 5], 15);

    // CAP 7
    await testeaza("7.1 Returnează Promise (async)", "s7_returnAsync", ["Mister"], "Mister", "verifica_promise");
    await testeaza("7.2 Așteaptă date (await)", "s7_asteaptaDate", [], 10);
    await testeaza("7.3 Mai multe await-uri", "s7_asteaptaDoua", [], 60);
}

ruleazaToateTestele();