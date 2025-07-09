const http = require('http');
const fs = require('fs').promises;

const PORT = 3000;
const LOG_FILE = 'visites.log';

function obtenirHorodatage() {
    const maintenant = new Date();
    const options = {
        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
    };
    return maintenant.toLocaleString('fr-FR', options);
}
const server = http.createServer(async (req, res) => {
    const ligneDeLog = `[${obtenirHorodatage()}] Visite sur ${req.url}\n`;
    try {
        await fs.appendFile(LOG_FILE, ligneDeLog, 'utf8');
        console.log(`Log enregistré : ${ligneDeLog.trim()}`);
    } catch (err) {
        console.error(`Erreur lors de l'enregistrement du log dans ${LOG_FILE}:`, err);
    }
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.statusCode = 200;
    res.end('Merci pour votre visite !');
});

server.listen(PORT, () => {
    console.log(`Serveur de journalisation des visites démarré sur http://localhost:${PORT}`);
    console.log(`Chaque visite sera enregistrée dans le fichier "${LOG_FILE}".`);
});