// CAPITOLUL 1: String-uri


// Ex 1.1: String Templating
// Returnează exact mesajul: "Salut [nume], este ora [ora]!"
function s1_templating(nume, ora) {
    // Codul tău aici
    return `Salut ${nume}, este ora ${ora}!`;
}

// Ex 1.2: Înlocuire cuvinte
// Primești un text. Folosește metoda corectă pentru a înlocui `cuvantVechi` cu `cuvantNou`.
function s1_inlocuire(text, cuvantVechi, cuvantNou) {
    // Codul tău aici
}

// Ex 1.3: Despărțire în listă
// Primești un string cu fructe separate prin virgulă (ex: "Mere,Pere"). 
// Transformă-l într-o listă (array) și returnează-o.
function s1_despartire(text) {
    // Codul tău aici
}

// CAPITOLUL 2: Obiecte

// Ex 2.1: Creare Obiect
// Creează și returnează un obiect care să conțină cheile 'nume' și 'varsta'
// cu valorile primite ca parametri.
function s2_creareObiect(nume, varsta) {
    // Codul tău aici
}

// Ex 2.2: Adăugare Proprietate
// Ai primit un obiect `obj`. Adaugă-i o proprietate nouă cu numele `cheie` 
// și valoarea `valoare`. Returnează obiectul modificat.
function s2_adaugaProprietate(obj, cheie, valoare) {
    // Codul tău aici
}

// Ex 2.3: Ștergere Proprietate
// Ai primit un obiect. Folosește keyword-ul corect pentru a șterge 
// proprietatea numită `cheie` din el, apoi returnează obiectul.
function s2_stergeProprietate(obj, cheie) {
    // Codul tău aici
}

// CAPITOLUL 3: Liste (Arrays)

// Ex 3.1: Push și Pop
// Scoate ULTIMUL element din listă și adaugă `elementNou` la sfârșitul ei.
function s3_pushPop(lista, elementNou) {
    // Codul tău aici
}

// Ex 3.2: Extragere (Slice)
// Folosește metoda care NU modifică array-ul original pentru a extrage 
// elementele de la indexul `start` până la `end` (neinclus).
function s3_extragere(lista, start, end) {
    // Codul tău aici
}

// Ex 3.3: Transformare în String (Join)
// Unește toate elementele listei primite într-un singur string, separate prin `separator`.
function s3_transformareString(lista, separator) {
    // Codul tău aici
}


// CAPITOLUL 4: Truthy & Falsy


// Ex 4.1: Este Truthy?
// Returnează valoarea booleană `true` dacă parametrul este Truthy, și `false` dacă e Falsy.
function s4_isTruthy(valoare) {
    // Codul tău aici
}

// Ex 4.2: Lista goală
// Verifică în mod corect dacă o listă este goală. Returnează true/false.
function s4_isListaGoala(lista) {
    // Codul tău aici
}

// Ex 4.3: Numără Falsy
// Parcurge lista primită și numără CÂTE elemente sunt Falsy. Returnează numărul.
function s4_numaraFalsy(lista) {
    // Codul tău aici
}

-
// CAPITOLUL 5: Referințe și Copieri


// Ex 5.1: Referință simplă
// Returnează exact același obiect primit (fără să-l copiezi).
function s5_referinta(obj) {
    // Codul tău aici
}

// Ex 5.2: Shallow Copy
// Folosește sintaxa modernă (...) pentru a crea și returna un Shallow Copy al obiectului.
function s5_shallowCopy(obj) {
    // Codul tău aici
}

// Ex 5.3: Deep Copy
// Folosește JSON.parse și JSON.stringify pentru a crea și returna un Deep Copy izolat complet.
function s5_deepCopy(obj) {
    // Codul tău aici
}


// CAPITOLUL 6: Funcții și Callbacks

// Ex 6.1: Funcție clasică
// Scrie codul pentru a returna rezultatul înmulțirii celor două numere.
function s6_inmultire(a, b) {
    // Codul tău aici
}

// Ex 6.2: Arrow Function
// Returnează direct o FUNCTIE (nu un număr). Funcția returnată trebuie să fie 
// de tip Arrow Function `() => {}` și să calculeze suma a doi parametri x și y.
function s6_returneazaArrow() {
    // Codul tău aici
}

// Ex 6.3: Callbacks
// Primești o valoare și o funcție `callback`. Apelează funcția callback dându-i 
// valoarea primită drept argument și returnează rezultatul.
function s6_aplicaCallback(valoare, callback) {
    // Codul tău aici
}


// CAPITOLUL 7: Async / Await

// Mock function pentru testare (NU modifica):
function cerereServer(x) { return new Promise(r => setTimeout(() => r(x * 2), 50)); }

// Ex 7.1: Return din funcție async
// Transformă funcția în `async` și returnează parametrul `valoare`. (Va returna automat o Promisiune).
function s7_returnAsync(valoare) {
    // Codul tău aici
}

// Ex 7.2: Așteaptă datele (Await)
// Fă funcția asincronă. Folosește `await` pentru a prelua rezultatul funcției `cerereServer(5)`.
// Returnează valoarea obținută.
function s7_asteaptaDate() {
    // Codul tău aici
}

// Ex 7.3: Mai multe cereri
// Fă funcția asincronă. Execută `cerereServer(10)` și `cerereServer(20)`, 
// așteaptă rezultatele lor, adună-le și returnează totalul.
function s7_asteaptaDoua() {
    // Codul tău aici
}



module.exports = {
    s1_templating, s1_inlocuire, s1_despartire,
    s2_creareObiect, s2_adaugaProprietate, s2_stergeProprietate,
    s3_pushPop, s3_extragere, s3_transformareString,
    s4_isTruthy, s4_isListaGoala, s4_numaraFalsy,
    s5_referinta, s5_shallowCopy, s5_deepCopy,
    s6_inmultire, s6_returneazaArrow, s6_aplicaCallback,
    s7_returnAsync, s7_asteaptaDate, s7_asteaptaDoua,
    cerereServer
};