// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware personnalisé pour vérifier l'heure de la requête
app.use((req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 (dimanche) à 6 (samedi)
    const hour = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next(); // Continuer vers la route demandée
    } else {
        res.send('L\'application web est disponible uniquement du lundi au vendredi, de 9h à 17h.');
    }
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'accueil.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});