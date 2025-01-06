// Utilisation de const pour une valeur qui ne changera jamais
const nom = "Jean";
console.log("Nom:", nom);

// Utilisation de let pour une valeur susceptible de changer
let age = 30;
const taille = 1.75;
console.log("Âge:", age, ", Taille:", taille, "m");

// Utilisation de const pour un booléen calculé une seule fois
const estAdulte = age >= 18;
console.log("Est adulte:", estAdulte);

// Utilisation de let pour une variable non initialisée qui pourrait être définie plus tard
let couleurPreferee;
console.log("Couleur préférée:", couleurPreferee);

// Utilisation de const pour représenter une valeur vide intentionnelle
const animalFavori = null;
console.log("Animal favori:", animalFavori);

// Utilisation de const pour un objet. L'objet est constant, mais ses propriétés peuvent être modifiées
const personne = {
    nom: "Jean",
    age: 30,
    estAdulte: true
};
console.log("Personne:", personne);

// Modification d'une propriété d'un objet (possible même avec const)
personne.age = 31;
console.log("Nouvel âge de la personne:", personne.age);

// Utilisation de const pour un tableau. Le tableau est constant, mais ses éléments peuvent changer
const fruits = ["Pomme", "Banane", "Mangue"];
console.log("Fruits:", fruits);

// Ajout d'un élément dans un tableau (possible même avec const)
fruits.push("Orange");
console.log("Fruits mis à jour:", fruits);

// Utilisation de const pour une fonction
const direBonjour = (nom) => {
    return `Bonjour, ${nom}!`;
};
console.log(direBonjour("Jean"));

// Utilisation de const pour un symbol
const idUnique = Symbol("id");
console.log("Type de idUnique:", typeof idUnique);

// Vérification des types avec typeof
console.log("Type de 'nom':", typeof nom);
console.log("Type de 'age':", typeof age);
console.log("Type de 'estAdulte':", typeof estAdulte);
console.log("Type de 'personne':", typeof personne);
console.log("Type de 'fruits':", typeof fruits);
console.log("Type de 'direBonjour':", typeof direBonjour);
