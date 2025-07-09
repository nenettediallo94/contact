const { addition, multiplication } = require('./maths.js');

console.log('--- Démarrage de l\'application de calcul ---');

const somme = addition(20, 3);
console.log(`Résultat de l'addition : ${somme}`);
const produit = multiplication(16, 3);
console.log(`Résultat de la multiplication : ${produit}`);
console.log('\n--- Application de calcul terminée ---');