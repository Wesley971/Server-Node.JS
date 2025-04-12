const express = require('express');

const app = express();
//Page d'accueil
app.get ('/', (req, res) => {
    res.send('Bienvenue /bonjour/ton-prenom' );});
app.get ('/bonjour/:prenom', (req, res) => {
    const prenom = req.params.prenom;
    res.send(`Bonjour ${prenom}`);});

//Page pour la limonade
app.get ('/limonade', (req, res) => {
    res.send('Voici votre limonade🍋');});

//Page pour le jus d'orange
    app.get ('/jus', (req, res) => {
        res.send('Voici votre jus🍊');});
        
// Page pour un thé
app.get ('/the', (req, res) => {
    res.send('Voici votre thé🍵');}
)        

// Route pour l'eau
app.get ('/eau', (req, res) => {
    res.send('Une bonne eau bien fraîche💧');});

// Le stand écoute 
app.listen(3000, () => {
    console.log('Le stand de limonade est ouvert a http://localhost:3000');})