// create-file.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier "welcome.txt" créé avec succès.');
});