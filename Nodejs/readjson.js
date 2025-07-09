import { readFile } from 'fs/promises';

try {
  const data = await readFile('users.json', 'utf8');
  const users = JSON.parse(data);

  users.forEach(user => {
    const id = user.id ? user.id : 'Id inconnu';
    const nom = user.name ? user.name : 'Nom inconnu';
    const adresse = user.adresse ? user.adresse : 'Adresse inconnue'; 
    console.log(`- Id: ${id}, Nom: ${nom}, Adresse: ${adresse}`);
  });
} catch (err) {
  console.error('Erreur :', err);
}