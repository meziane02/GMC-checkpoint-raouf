// email-sender.js
const nodemailer = require('nodemailer');

// Configuration du transporteur (utilisez votre service de messagerie)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Exemple : Gmail
    auth: {
        user: 'raoufmeziane02@gmail.com', // Remplacez par votre email
        pass: 'mezianeejeje', // Remplacez par votre mot de passe
    },
});

// Options de l'email
const mailOptions = {
    from: 'raoufmeziane02@gmail.com', // Expéditeur
    to: 'raoufmeziane03@example.com', // Destinataire
    subject: 'Test d\'envoi d\'email avec Node.js', // Sujet
    text: 'Ceci est un test d\'envoi d\'email avec Node.js et Nodemailer.', // Corps du message
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'email :', error);
    } else {
        console.log('Email envoyé avec succès :', info.response);
    }
});