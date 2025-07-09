const http = require('http'); 

const PORT = 3000; 

const server = http.createServer((req, res) => {

  console.log(`Requête reçue pour l'URL : ${req.url}`);

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');


  if (req.url === '/') {

    res.statusCode = 200; // Code HTTP 200 = OK
    res.end('Bienvenue sur la page d\'accueil'); 
  } else if (req.url === '/about') {
    // Si l'URL est /about
    res.statusCode = 200; // Code HTTP 200 = OK
    res.end('À propos de nous');
  } else if (req.url === '/contact') {
    // Si l'URL est /contact
    res.statusCode = 200; // Code HTTP 200 = OK
    res.end('Contactez-nous ici');
  } else {

    res.statusCode = 404; // Code HTTP 404 = Non trouvé
    res.end('Erreur 404 - Page non trouvée');
  }
});


server.listen(PORT, () => {
  console.log(`Serveur démarré et écoute sur http://localhost:${PORT}`);
  console.log('Testez les routes suivantes dans votre navigateur :');
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/about`);
  console.log(`- http://localhost:${PORT}/contact`);
  console.log(`- http://localhost:${PORT}/une-autre-page`);
});