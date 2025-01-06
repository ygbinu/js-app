# Exercices JavaScript pour Apprendre les Concepts de Base

## 1. Types en JavaScript

### Exercice
Crée un fichier JavaScript et définis les variables suivantes avec les types appropriés :
- Une chaîne de caractères qui contient ton nom.
- Un nombre représentant ton âge.
- Un tableau contenant les noms de trois villes que tu aimes.
- Un objet représentant un livre avec des propriétés comme `titre`, `auteur`, et `année`.
- Une fonction qui retourne la somme de deux nombres.

Teste ensuite le type de chaque variable avec `typeof`.

---

## 2. Structures de Données

### Exercice
1. Crée un tableau qui contient 10 nombres aléatoires entre 1 et 100.
    - Ajoute un nombre au début et à la fin du tableau.
    - Supprime le premier et le dernier élément.
    - Trie le tableau dans l'ordre croissant.
2. Crée un objet représentant une voiture avec des propriétés comme `marque`, `modèle`, `année`, et une méthode `afficherInfos` qui affiche toutes les propriétés.

---

## 3. Opérateurs

### Exercice
1. Écris un script qui utilise les opérateurs arithmétiques pour calculer :
    - L'aire d'un rectangle de dimensions 5x10.
    - Le périmètre d'un cercle de rayon 7.
2. Crée une fonction qui utilise les opérateurs de comparaison pour vérifier si une valeur donnée est dans une plage [10, 20].
3. Utilise des opérateurs logiques pour valider qu’un utilisateur est majeur (18 ans et plus) **et** a un compte actif.

---

## 4. Conditions

### Exercice
1. Demande à l'utilisateur d'entrer un nombre (via `prompt`) et vérifie si ce nombre est pair ou impair.
2. Crée une fonction qui prend un score en paramètre et retourne une note (A, B, C, D, ou F) selon cette échelle :
    - A : 90-100
    - B : 80-89
    - C : 70-79
    - D : 60-69
    - F : <60
3. Implémente un système simple de validation d'âge :
    - Moins de 12 ans : "Enfant"
    - 12-17 ans : "Adolescent"
    - 18 ans et plus : "Adulte"

---

## 5. Boucles

### Exercice
1. Utilise une boucle `for` pour afficher les nombres de 1 à 20.
2. Utilise une boucle `while` pour compter à rebours de 10 à 0.
3. Crée un tableau contenant des noms, puis utilise une boucle `for...of` pour afficher chaque nom en majuscules.
4. Crée un objet avec des propriétés, puis utilise une boucle `for...in` pour afficher ses clés et valeurs.

---

## 6. Fonctions

### Exercice
1. Écris une fonction qui prend deux nombres et retourne leur produit.
2. Implémente une fonction fléchée qui prend un tableau de nombres et retourne un tableau de ces nombres multipliés par 2.
3. Écris une fonction récursive pour calculer la somme des nombres de 1 à n.

---

## 7. Manipulation du DOM

### Exercice
1. Crée une page HTML avec un bouton, une liste vide, et un champ de texte. En JavaScript :
    - Quand l'utilisateur clique sur le bouton, ajoute le contenu du champ de texte comme nouvel élément de liste.
    - Si un élément de la liste est cliqué, supprime-le.
2. Ajoute une classe CSS à tous les éléments pairs de la liste pour changer leur couleur de fond.
3. Crée une div et utilise `setAttribute` pour lui ajouter une id et un titre, puis ajoute-la au DOM.

---

## 8. Asynchronisme

### Exercice
1. Crée une fonction asynchrone qui :
    - Utilise `setTimeout` pour simuler une tâche longue (2 secondes).
    - Après la tâche, affiche un message "Tâche terminée !".
2. Utilise l’API Fetch pour récupérer les données d’un service gratuit comme [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) et afficher les titres des 5 premiers articles.

---

## 9. Classes

### Exercice
1. Crée une classe `Utilisateur` avec les propriétés `nom`, `email`, et une méthode `afficherInfos`.
    - Instancie deux objets `Utilisateur` et affiche leurs informations.
2. Crée une classe `Animal` avec une méthode `parler`. Crée une sous-classe `Chien` qui implémente `parler` pour afficher "Woof Woof".

---

## 10. Mise en Pratique Globale : Mini-ToDo App

### Projet
1. Crée une page avec :
    - Un champ de texte pour entrer une tâche.
    - Un bouton "Ajouter tâche".
    - Une liste pour afficher les tâches.
2. Fonctionnalités :
    - Ajouter une tâche.
    - Supprimer une tâche en cliquant dessus.
    - Marquer une tâche comme "faite" en cliquant deux fois dessus (change de style CSS).
3. Utilise des classes pour structurer le code.

---

Ces exercices te permettront de pratiquer et de consolider ta compréhension des concepts fondamentaux de JavaScript !