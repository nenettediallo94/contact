const os = require('os'); 

console.log('--- Informations sur le Système d\'Exploitation ---');


const nomSysteme = os.type();
console.log(`Type de système : ${nomSysteme}`);


const infoUtilisateur = os.userInfo();
console.log(`Nom d'utilisateur : ${infoUtilisateur.username}`);


const memoireTotaleOctets = os.totalmem();
const memoireLibreOctets = os.freemem();


const octetsVersGo = (octets) => (octets / (1024 * 1024 * 1024)).toFixed(2); 

const memoireTotaleGo = octetsVersGo(memoireTotaleOctets);
const memoireLibreGo = octetsVersGo(memoireLibreOctets);

console.log(`Mémoire totale : ${memoireTotaleGo} Go`);
console.log(`Mémoire libre : ${memoireLibreGo} Go`);

console.log('\n--- Fin des informations ---');