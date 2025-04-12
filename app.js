const express = require('express');

const app = express();

app.get ('/', (req, res) => {
    res.send('Bienvenue ! Tu veux une limonade ?🍋');});

app.listen(3000, () => {
    console.log('Le stand de limonade est ouvert a http://localhost:3000');});