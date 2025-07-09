import log from './logger.js';

console.log('--- Démarrage du processus ---');
log('Le processus a démarré.');

setTimeout(() => {
  log('Consultation de la page.');
}, 1000);

setTimeout(() => {
  log('Ajout d\'un élément au panier.');
}, 2500);

setTimeout(() => {
  log('Confirmation et fermeture.');
}, 4000); 

console.log('--- Fin du script app.js ---');