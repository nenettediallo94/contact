const fs = require('fs'); 

const dateActuelle = new Date().toLocaleString();


const messageALogger = `Fichier créé par Node.js le ${dateActuelle}`;

fs.writeFile('log.txt', messageALogger, 'utf8', (erreur) => {
 
  if (erreur) {
    console.error('Erreur lors de l\'écriture du fichier : ' + erreur.message);
    return; 
  }
  console.log('Fichier "log.txt" créé et écrit avec succès !');
});