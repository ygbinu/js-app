// --- CONDITION IF/ELSE ---
const age = 20;

if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

// --- CONDITION ELSE IF ---
const note = 15;

if (note >= 18) {
    console.log("Excellent !");
} else if (note >= 12) {
    console.log("Bon travail.");
} else {
    console.log("Vous pouvez faire mieux.");
}

// --- CONDITION AVEC SWITCH ---
const jour = "mardi";

switch (jour) {
    case "lundi":
        console.log("Début de la semaine.");
        break;
    case "mardi":
        console.log("C'est mardi !");
        break;
    case "samedi":
    case "dimanche":
        console.log("C'est le week-end !");
        break;
    default:
        console.log("Jour non reconnu.");
}

// --- OPÉRATEUR TERNAIRE ---
const estAdulte = age >= 18 ? "Oui, majeur." : "Non, mineur.";
console.log("Est adulte :", estAdulte);

// --- CONDITION AVEC BOOLÉEN ET LOGIQUE ---
const a = 10;
const b = 20;

if (a < b && b > 15) {
    console.log("b est plus grand que a et aussi supérieur à 15.");
}

if (a > b || a === 10) {
    console.log("a est supérieur à b ou bien a est égal à 10.");
}

if (!estAdulte) {
    console.log("Ce n'est pas un adulte.");
}

// --- SHORT-CIRCUITING (Évaluation courte) ---
// Les conditions utilisent des opérateurs logiques pour exécuter des expressions rapidement
const utilisateur = null;
const nomUtilisateur = utilisateur || "Anonyme"; // Si utilisateur est null ou undefined, retourne "Anonyme"
console.log("Nom utilisateur :", nomUtilisateur); // Affiche "Anonyme"

const nombre = 5;
nombre > 0 && console.log("Le nombre est positif."); // Affiche "Le nombre est positif." uniquement si la condition est vraie

// --- NESTED CONDITIONS (Conditions imbriquées) ---
const temps = "pluie";
const humeur = "bonne";

if (temps === "soleil") {
    if (humeur === "bonne") {
        console.log("Profitez de la journée !");
    } else {
        console.log("Le soleil vous remontera peut-être le moral.");
    }
} else {
    if (humeur === "bonne") {
        console.log("Restez positif même sous la pluie !");
    } else {
        console.log("Un chocolat chaud pourrait aider !");
    }
}
