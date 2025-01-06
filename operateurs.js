// --- OPÉRATEURS ARITHMÉTIQUES ---
const a = 10;
const b = 3;

console.log("Addition:", a + b);
console.log("Soustraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulo (reste de la division):", a % b);
console.log("Exponentiation:", a ** b);

// --- OPÉRATEURS DE COMPARAISON ---
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= 10:", a >= 10);
console.log("a == '10':", a == "10");
console.log("a === '10':", a === "10");
console.log("a != b:", a != b);
console.log("a !== '10':", a !== "10");

// --- OPÉRATEURS LOGIQUES ---
const x = true;
const y = false;

console.log("x AND y:", x && y);
console.log("x OR y:", x || y);
console.log("NOT x:", !x);

// --- OPÉRATEURS D'INCRÉMENTATION ET DE DÉCRÉMENTATION ---
let compteur = 5;
console.log("Avant incrémentation:", compteur);
console.log("Incrémentation (postfixe):", compteur++);
console.log("Après incrémentation:", compteur);
console.log("Décrémentation (préfixe):", --compteur);

// --- OPÉRATEURS D'AFFECTATION ---
let num = 10;
num += 5;
console.log("Après += 5:", num);

num *= 2;
console.log("Après *= 2:", num);

