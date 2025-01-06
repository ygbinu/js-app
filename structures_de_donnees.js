// --- TABLEAUX (Arrays) ---
// Un tableau est une liste ordonnée d'éléments
const fruits = ["Pomme", "Banane", "Mangue"];
console.log("Fruits:", fruits); // Affiche "Fruits: [ 'Pomme', 'Banane', 'Mangue' ]"

// Accès à un élément par son index
console.log("Premier fruit:", fruits[0]); // Affiche "Premier fruit: Pomme"

// Ajout d'un élément
fruits.push("Orange"); // Ajoute "Orange" à la fin du tableau
console.log("Fruits après ajout:", fruits); // Affiche "[ 'Pomme', 'Banane', 'Mangue', 'Orange' ]"

// --- OBJETS (Objects) ---
// Un objet est une collection de paires clé-valeur
const personne = {
    nom: "Jean",
    age: 30,
    estAdulte: true,
    adresse: {
        rue: "10, Rue de la Paix",
        ville: "Paris"
    }
};
console.log("Personne:", personne); // Affiche l'objet complet

// Accès à une propriété
console.log("Nom:", personne.nom); // Affiche "Nom: Jean"
console.log("Adresse:", personne.adresse.ville); // Affiche "Adresse: Paris"

// Ajout d'une propriété
personne.profession = "Développeur";
console.log("Personne avec profession:", personne); // Ajoute la clé "profession"

// --- MAPS ---
// Une Map est une collection clé-valeur avec des clés de n'importe quel type
const mapExemple = new Map();
mapExemple.set("clé1", "valeur1"); // Ajoute une clé-valeur
mapExemple.set(42, "valeur2"); // Clé numérique
console.log("Map complète:", mapExemple); // Affiche le contenu de la Map

// Accès à une valeur
console.log("Valeur de 'clé1':", mapExemple.get("clé1")); // Affiche "valeur1"

// --- SETS ---
// Un Set est une collection de valeurs uniques
const ensemble = new Set();
ensemble.add("Pomme");
ensemble.add("Banane");
ensemble.add("Pomme"); // Ne sera pas ajouté car déjà présent
console.log("Set complet:", ensemble); // Affiche "Set complet: Set { 'Pomme', 'Banane' }"

// Vérification d'existence
console.log("Contient 'Banane':", ensemble.has("Banane")); // Affiche "true"

// --- STACKS (Piles) ---
// Une pile fonctionne selon le principe LIFO (Last In, First Out)
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element); // Ajoute un élément
    }
    pop() {
        return this.items.pop(); // Retire le dernier élément
    }
    peek() {
        return this.items[this.items.length - 1]; // Consulte le dernier élément
    }
}

const pile = new Stack();
pile.push(10);
pile.push(20);
console.log("Dernier élément:", pile.peek()); // Affiche "20"
console.log("Élément retiré:", pile.pop()); // Affiche "20"

// --- QUEUES (Files) ---
// Une file fonctionne selon le principe FIFO (First In, First Out)
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element); // Ajoute un élément à la fin
    }
    dequeue() {
        return this.items.shift(); // Retire le premier élément
    }
}

const file = new Queue();
file.enqueue(1);
file.enqueue(2);
console.log("Premier élément retiré:", file.dequeue()); // Affiche "1"

// --- LISTES CHAÎNÉES ---
// Une liste chaînée est une collection de nœuds où chaque nœud pointe vers le suivant
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

const liste = new LinkedList();
liste.add(5);
liste.add(10);
console.log("Tête de la liste chaînée:", liste.head); // Affiche le premier nœud
