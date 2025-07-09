const fs = require('fs').promises;
const FICHIER_LOGS = 'logs.txt';
async function log(message) {
  const maintenant = new Date();
  const horodatage = maintenant.toLocaleString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  });

  const ligneDeLog = `[${horodatage}] ${message}`;
  console.log(ligneDeLog);
  try {
    await fs.appendFile(FICHIER_LOGS, ligneDeLog + '\n', 'utf8');
  } catch (erreur) {
    console.error(`Erreur lors de l'écriture dans ${FICHIER_LOGS}:`, erreur);
  }
}
module.exports = log;
