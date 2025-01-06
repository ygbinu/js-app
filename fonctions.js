// --- FONCTION CLASSIQUE ---
function direBonjour(nom) {
    return `Bonjour, ${nom} !`;
}

console.log(direBonjour("Alice"));

// --- FONCTION AVEC PARAMÈTRES PAR DÉFAUT ---
function saluer(nom = "inconnu") {
    return `Salut, ${nom} !`;
}

console.log(saluer());
console.log(saluer("Bob"));

// --- FONCTION ANONYME ---
// Une fonction sans nom, assignée à une variable
const addition = function (a, b) {
    return a + b;
};

console.log("Addition:", addition(5, 3)); // Affiche 8

// --- FONCTION fléchée (ARROW FUNCTION) ---
// Syntaxe concise pour les fonctions
const multiplier = (a, b) => a * b;

console.log("Multiplication:", multiplier(4, 2)); // Affiche 8

// --- FONCTION AUTO-EXÉCUTÉE (IIFE) ---
// Fonction qui s'exécute immédiatement après sa déclaration
(function () {
    console.log("Je suis une fonction auto-exécutée !");
})(); // Affiche directement le message

// --- FONCTION AVEC UN REST PARAMETER ---
// Permet de gérer un nombre variable d'arguments
function somme(...nombres) {
    return nombres.reduce((total, n) => total + n, 0);
}

console.log("Somme:", somme(1, 2, 3, 4, 5)); // Affiche 15

// --- FONCTION CALLBACK ---
// Une fonction passée comme argument pour être exécutée plus tard
function operation(a, b, callback) {
    return callback(a, b);
}

const soustraction = (a, b) => a - b;
console.log("Soustraction avec callback:", operation(10, 3, soustraction)); // Affiche 7

// --- FONCTION RÉCURSIVE ---
// Une fonction qui s'appelle elle-même
function factorielle(n) {
    if (n === 0) return 1;
    return n * factorielle(n - 1);
}

console.log("Factorielle de 5:", factorielle(5)); // Affiche 120

// --- FONCTION AVEC UN CONTEXTE (this) ---
// Les fonctions dans les objets
const personne = {
    nom: "Charlie",
    saluer() {
        console.log(`Salut, je suis ${this.nom}`);
    },
};

personne.saluer(); // Affiche "Salut, je suis Charlie"

// --- FONCTION ASYNCHRONE ---
// Les fonctions qui retournent une promesse
async function attendre() {
    console.log("Attente en cours...");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause de 2 secondes
    console.log("Attente terminée !");
}

attendre(); // Exécute la fonction asynchrone

// --- FONCTION GÉNÉRATRICE ---
// Utilisée pour créer des itérateurs
function* genererNombre() {
    yield 1;
    yield 2;
    yield 3;
}

const generateur = genererNombre();
console.log(generateur.next().value); // Affiche 1
console.log(generateur.next().value); // Affiche 2
console.log(generateur.next().value); // Affiche 3
