# ☕ Mini Serveur de Commande de Boissons (Express.js)

Bienvenue sur mon petit projet Node.js + Express 🎉  
Ce projet a été conçu **petit à petit**, pour apprendre à manipuler un serveur avec Express, et construire une application simple mais utile !

---

## 🔧 Fonctionnalités

- 🎯 Serveur Express de base
- 🛣️ Routes statiques (ex: `/limonade`, `/eau`, `/thé`)
- 🔁 Routes dynamiques (ex: `/boisson/:nom`, `/commande/:prenom/:boisson`)
- 📋 Page `/menu` affichant une liste de boissons
- 📬 Formulaire HTML (à venir) pour commander via une interface simple

---

## 🚀 Lancer le projet

### 1. Cloner le repo (ou copier les fichiers)

```bash
git clone [url-du-repo]
cd mon-serveur
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer le serveur

```bash
node app.js
```

Puis ouvrir : [http://localhost:3000](http://localhost:3000)


## 🗺️ Exemples de routes

| Route                        | Description                                  |
|-----------------------------|----------------------------------------------|
| `/`                         | Page d’accueil                               |
| `/menu`                     | Liste de toutes les boissons                 |
| `/boisson/jus`              | Affiche "Tu as choisi la boisson : jus"     |
| `/commande/Ana/limonade`    | Message personnalisé de commande             |


## 💡 Objectif pédagogique

Ce projet a été construit pour **améliorer ma compréhension de Node.js & Express**, étape par étape.  
Il me servira aussi comme **projet vitrine dans mon portfolio**.


## 📦 Technologies utilisées

- Node.js
- Express.js
- JavaScript (vanilla)
- HTML (pour les pages simples)


## 🔜 Prochaines étapes

- Ajouter un formulaire HTML pour commander
- Mémoriser les commandes côté serveur
- Ajouter une interface "admin" avec un historique
- Déploiement en ligne (Render ou Railway)
