const http = require('http');
const PORT = 3000;

const formHtmlSimple = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire Simple</title>
</head>
<body>
    <h1>Soumettre vos informations</h1>
    <form action="/form" method="POST">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    console.log(`Requête reçue: URL=${req.url}, Méthode=${req.method}`);

    // Si la route est '/form'
    if (req.url === '/form') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.statusCode = 200;
            res.end(formHtmlSimple);
        } else if (req.method === 'POST') {
            let body = '';
            
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                console.log('--- Formulaire soumis ---');
                console.log('Données brutes reçues:', body); 

                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.statusCode = 200;
                res.end('Formulaire reçu par le serveur !'); 
            });
        } else {
        
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.statusCode = 405; 
            res.end('Méthode non autorisée.');
        }
    } else {
   
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.statusCode = 404; 
        res.end('Erreur 404 - Page introuvable.');
    }
});

server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Testez en ouvrant http://localhost:${PORT}/form dans votre navigateur.`);
});