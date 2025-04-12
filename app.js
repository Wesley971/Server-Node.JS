const express = require('express');
const app = express();

// Page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur le stand ! Essaye /bonjour/ton-prenom');
});

// Route dynamique de salutation
app.get('/bonjour/:prenom', (req, res) => {
  const prenom = req.params.prenom;
  res.send(`Bonjour ${prenom}`);
});

// Route dynamique pour une boisson
app.get('/boisson/:nom', (req, res) => {
  const nom = req.params.nom;
  res.send(`Tu as choisi la boisson : ${nom}`);
});

// Route menu
app.get('/menu', (req, res) => {
  const boissons = ['limonade', 'eau', 'jus', 'thé'];
  res.send(`Voici notre menu : ${boissons.join(', ')}`);
});

// Route commande en préparation
app.get('/commande/:prenom/:boisson', (req, res) => {
  const prenom = req.params.prenom;
  const boisson = req.params.boisson;
  res.send(`Bonjour ${prenom}, votre commande de ${boisson} est en préparation`);
});

// Le serveur écoute
app.listen(3000, () => {
  console.log('Le stand de limonade est ouvert à http://localhost:3000');
});
