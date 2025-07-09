
const fs = require('fs');
const EventEmitter = require('events');

const emetteur = new EventEmitter();

function enregistrerActivite(message) {
    const maintenant = new Date().toISOString().replace('T', ' ').slice(0, 16);
    const ligne = `[${maintenant}] ${message}\n`;

    fs.appendFile('activité.txt', ligne, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture :', err);
        }
    });
}

emetteur.on('activité', enregistrerActivite);

emetteur.emit('activité', 'Utilisateur connecté');



