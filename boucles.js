// --- BOUCLE FOR ---
for (let i = 0; i < 5; i++) {
    console.log(`For loop - itération ${i}`);
}

// --- BOUCLE WHILE ---
let compteur = 0;
while (compteur < 3) {
    console.log(`While loop - compteur: ${compteur}`);
    compteur++;
}

// --- BOUCLE DO WHILE ---
let valeur = 5;
do {
    console.log(`Do While loop - valeur: ${valeur}`);
    valeur--;
} while (valeur > 5);

// --- BOUCLE FOR...OF ---
const fruits = ["Pomme", "Banane", "Mangue"];
for (const fruit of fruits) {
    console.log(`For...of loop - fruit: ${fruit}`);
}

// --- BOUCLE FOR...IN ---
const voiture = { marque: "Toyota", modele: "Corolla", annee: 2023 };
for (const propriete in voiture) {
    console.log(`For...in loop - ${propriete}: ${voiture[propriete]}`);
}

// --- UTILISATION DE BREAK ---
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Boucle interrompue à i = 5");
        break;
    }
    console.log(i);
}

// --- UTILISATION DE CONTINUE ---
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skip itération 2");
        continue;
    }
    console.log(`Continue exemple - i: ${i}`);
}

// --- BOUCLE AVEC MAP (OU AUTRES MÉTHODES D'ITÉRATION) ---
const nombres = [1, 2, 3, 4];
const nombresDoubles = nombres.map((n) => n * 2);
console.log("Nombres doublés avec map:", nombresDoubles);

// --- UTILISATION D'UNE BOUCLE POUR UN TABLEAU MULTIDIMENSIONNEL ---
const matrice = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice[i].length; j++) {
        console.log(`Matrice[${i}][${j}] = ${matrice[i][j]}`);
        // Affiche chaque élément de la matrice
    }
}
