const express = require('express');
const app = express();

// Page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur le stand ! Essaye /bonjour/ton-prenom');
});

// Route dynamique de salutation
app.get('/bonjour/:prenom', (req, res) => {
  const prenom = req.params.prenom;
  res.send(`Bonjour ${prenom} 👋`);
});

// Menu général
app.get('/menu', (req, res) => {
  const boissons = ['limonade', 'eau', 'jus', 'thé'];
  res.send(`Voici notre menu : ${boissons.join(', ')}`);
});

// Route dynamique pour une boisson
app.get('/boisson/:nom', (req, res) => {
  const nom = req.params.nom;
  res.send(`Tu as choisi la boisson : ${nom} 🥤`);
});

// Formulaire de commande
app.get('/formulaire', (req, res) => {
  res.send(`
    <h2>Commande une boisson</h2>
    <form action="/commande" method="GET">
      <label>Ton prénom :</label><br>
      <input type="text" name="prenom" required><br><br>

      <label>Choisis ta boisson :</label><br>
      <select name="boisson">
        <option value="limonade">Limonade</option>
        <option value="eau">Eau</option>
        <option value="jus">Jus</option>
        <option value="thé">Thé</option>
      </select><br><br>

      <button type="submit">Commander</button>
    </form>
  `);
});

// Traitement du formulaire → redirection vers la commande personnalisée
app.get('/commande', (req, res) => {
  const { prenom, boisson } = req.query;
  res.redirect(`/commande/${prenom}/${boisson}`);
});

// Route commande finale
app.get('/commande/:prenom/:boisson', (req, res) => {
  const { prenom, boisson } = req.params;
  res.send(`Bonjour ${prenom}, votre commande de ${boisson} est en préparation 🍹`);
});

// Lancement du serveur
app.listen(3000, () => {
  console.log('Le stand est ouvert à http://localhost:3000');
});
