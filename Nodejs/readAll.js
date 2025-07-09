const fs = require('fs'); 

console.log('--- Démarrage de la lecture séquentielle des fichiers ---');

let contenuGlobal = ''; 

fs.readFile('fichier1.txt', 'utf8', (erreur1, donnees1) => {
  if (erreur1) {
    console.error('Erreur lors de la lecture de fichier1.txt : ' + erreur1.message);
    return; 
  }
  contenuGlobal += donnees1 + '\n'; 
  console.log('Fichier 1 lu.');

  
  fs.readFile('fichier2.txt', 'utf8', (erreur2, donnees2) => {
    if (erreur2) {
      console.error('Erreur lors de la lecture de fichier2.txt : ' + erreur2.message);
      return; 
    }
    contenuGlobal += donnees2 + '\n'; 
    console.log('Fichier 2 lu.');

    fs.readFile('fichier3.txt', 'utf8', (erreur3, donnees3) => {
      if (erreur3) {
        console.error('Erreur lors de la lecture de fichier3.txt : ' + erreur3.message);
        return; 
      }
      contenuGlobal += donnees3 + '\n';
      console.log('Fichier 3 lu.');

      console.log('\n--- Contenu TOTAL des 3 fichiers ---');
      console.log(contenuGlobal);
      console.log('------------------------------------');
    }); 
  }); 
}); 

console.log('Les requêtes de lecture ont été envoyées. En attente des callbacks...');