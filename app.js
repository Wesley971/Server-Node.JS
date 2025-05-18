const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques (comme le CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Page d'accueil → formulaire
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route de salutation
app.get('/bonjour/:prenom', (req, res) => {
  const prenom = req.params.prenom;
  res.send(`Bonjour ${prenom} 👋`);
});

// Menu général
app.get('/menu', (req, res) => {
  const boissons = ['limonade', 'eau', 'jus', 'thé'];
  res.send(`Voici notre menu : ${boissons.join(', ')}`);
});

// Boisson individuelle
app.get('/boisson/:nom', (req, res) => {
  const nom = req.params.nom;
  res.send(`Tu as choisi la boisson : ${nom} 🥤`);
});

// Traitement du formulaire
app.get('/commande', (req, res) => {
  const { prenom, boisson } = req.query;
  res.redirect(`/commande/${prenom}/${boisson}`);
});

// Commande personnalisée
app.get('/commande/:prenom/:boisson', (req, res) => {
  const { prenom, boisson } = req.params;
  res.send(`Bonjour ${prenom}, votre commande de ${boisson} est en préparation 🍹`);
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le stand est ouvert sur le port ${PORT}`);
});
