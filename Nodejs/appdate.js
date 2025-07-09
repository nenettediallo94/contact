import { getDateFormatee } from './datej.js';
const dateActuelle = getDateFormatee();
console.log("Date actuelle formatée :", dateActuelle);
console.log(`Bonjour ! Nous sommes le ${dateActuelle}.`);