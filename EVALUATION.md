# Le contrôle sur Docker let's go

## Prérequis

Pour l'évaluation, vous aurez besoin de:
 - npm installé sur votre environnement. Vous pouvez vérifier l'installation en ouvrant un terminal et en tapant `npm --version`
 - Docker Desktop, ou bien un engine Docker si vous êtes sous linux. Vérifiez que vous avez bien lancé Docker desktop ou votre engine, puis tapez la commande `docker ps` pour vérifier la connectivité

Clonez ce repository, ouvrez un terminal dans le dossier `blog-app` puis installez les packages npm afin de faire tourner l'application React.

Essayez ensuite de faire tourner l'application React pour confirmer que tout est bon.

```shell
cd blog-app
npm install
npm run start
```

Si vous ne pouvez pas faire tourner Docker sur votre ordinateur, vous pouvez faire l'évaluation plusieurs. Mettez simplement tout les noms dans le mail du rendu.

## Rendu

Pour le rendu, envoyez un document texte, word, markdown ou autre contenant les réponses aux questions numérotés à l'adresse jimbienvenu@gmail.com.
Précisez votre nom et prénom dans le mail, et envoyez le avant la fin des 3 heures !

Pour les manipulations Docker, répondez simplement avec les commandes utilisées pour effectuer la manipulation. Pour les questions bonus demandant l'écriture d'un Dockerfile (plus d'autres fichiers potentiellement), copiez le contenu de vos fichiers dans la réponse à la question, ou bien envoyez les en pièce jointe du mail.

## Ressources

 - Utilisez les transcripts de correction du TP précédent pour vous aider
 - Documentation officielle du CLI Docker: https://docs.docker.com/reference/
 - Documentation officielle pour les Dockerfile: https://docs.docker.com/engine/reference/builder/

## Exercices

### Exercice 1: Manipulations de base

 1. Télécharger l'image `postgres` avec le tag `14.1`
 2. Quelle commande peut-on utiliser pour afficher les images téléchargées ?
 3. Lancer un container interactif avec l'image `alpine`. Cela devrait vous permettre d'accéder à un terminal dans une machine linux alpine.
    - Tapez la commande `exit` dans le terminal du container. Le container va s'arrêter.
    - Si j'utilise la commande `docker ps`, mon container alpine n'apparaît pas. Pourquoi ? Comment puis-je le lister ?
    - Comment puis-je supprimer ce container arrêté ?
 4. Créer un `network` nommé `test`.
 5. Comment lister les networks existants ?
 6. Lancer un container `alpine` interactif en arrière plan avec les paramètres suivants :
    - Le container doit être enregistré sur le network `test`
    - Lier le port `5000` de ma machine hôte avec le port `8000` du container
    - Passer une variable d'environnement nommée `TEST` qui contiendra une valeur de votre choix
 7. Comment puis-je vérifier que mon container tourne bien en arrière plan ?
 8. Comment puis-je vérifier que le lien entre mes ports est bien effectué ?
 9. Quelle commande puis-je utiliser pour créer un terminal dans le container `alpine` qui tourne en arrière-plan ?
 10. Quelle commande linux puis-je utiliser une fois dans mon container pour lister les variables d'environnement ?

### Exercice 2: Build une image et lancer un container pour une API Express

Pour cette partie, vous aurez besoin de faire tourner l'application React blog-app.
Une fois sur l'app, si vous vous rendez sur la page `Articles` une erreur devrait apparaître vous informant que l'application n'a pas pu récupérer les articles sur le réseau.
L'appli React tente de récupérer les articles sur l'adresse `http://localhost:8000`.
Le but de cet exercice est de lancer l'API express présente dans le dossier `express-api` à l'aide de Docker.

 11. `build` le Dockerfile présent dans le dossier `express-api` et appeler l'image `express-api:1.0.0`
 12. `run` un container utilisant ce tag pour lancer l'api. Il est important de ne pas oublier la configuration des ports pour que l'application React puisse accéder à l'api servie par le container.
 13. Quelle commande avez-vous utilisé pour lancer l'application React ?
 14. Pourquoi est-il nécéssaire d'effectuer une configuration spécifique pour les ports afin que notre application React puisse communiquer avec le container ?

### Exercice 3: Faire communiquer plusieurs containers sur le réseau

Le but de cet exercice est le même que le précédent. Assurez-vous de bien arrêter le container node lancé à l'exercice précédent. Vous aurez besoin de libérer le port `8000`.
A l'inverse de l'exercice précédent, l'api django a besoin d'une base de données PostgresQL pour persister et servir les données.
Le Dockerfile pour l'api python est situé dans le dossier `python-django/blogapp`

Documentation pour l'image postgres: https://hub.docker.com/_/postgres/

Vous aurez aussi besoin de bien lire la section network pour comprendre comment faire communiquer les containers: 
https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network

L'application django tente de communiquer avec une base données nommée `articles` suitée à l'adresse `database`, via l'utilisateur `articles` et le mot de passe `articles`. Il n'est pas nécéssaire de modifier le moindre fichier de configuration de l'application, tout doit se faire au niveau de la configuration réseau des containers.

15. Créer un `network` qui vous permettra de connecter les deux containers
16. Créer un container pour la base de données PostgresQL et le démarrer dans le network que vous venez de créer. Assurez-vous de regarder la documentation de l'image Postgres pour créer la base de données et l'utilisateur souhaité.
17. `build` le Dockerfile situé dans le dossier `python-django/blogapp`
18. Créer un container basé sur l'image que vous venez de build et le démarrer dans le même network que le container précédent. Si tout se passe bien, les containers devraient communiquer ensemble et la base de données devrait se remplir.
19. Accéder aux logs du container python pour voir si tout est bien démarré.
20. Comment avez-vous fait pour faire communiquer les deux containers ensemble ?

### Exercice 4: Ecrire un Dockerfile

Le but de cet exercice est d'écrire un Dockerfile pour lancer l'application React.
Voici la documentation pour officielle pour l'écriture de Dockerfile https://docs.docker.com/engine/reference/builder/
Vous êtes libre 

21. A quoi sert un Dockerfile ?
22. Quel dossier est le plus approprié pour créer le Dockerfile pour l'application React ?
23. Ecrire en premier lieu un Dockerfile qui va copier l'ensemble des fichiers de l'application React, installer les dépendances NPM, puis lancer le serveur de développement.
24. `build` le Dockerfile et tagger l'image. Quelle taille fait l'image ?
25. Est-il possible de réduire la taille de l'image ? Comment ?
26. Le Dockerfile demandé sert l'application React via le serveur de développement. Ceci est adapté pour du développement, mais si vous souhaitez utiliser ce Dockerfile pour déployer votre application, ce n'est pas otpimisé. Comment feriez-vous pour servir l'application via un build du projet react plutôt que le serveur de développement ?
27. Proposez un Dockerfile qui permettrait de servir un build de l'application React, plutôt qu'utiliser le serveur de développement.



