# TP Docker

Pour les TP vous aurez besoin de :
 - npm installé sur votre environnement. Vous pouvez vérifier l'installation en ouvrant un terminal et en tapant `npm --version`
 - Docker Desktop, ou bien un engine Docker si vous êtes sous linux. Vérifiez que vous avez bien lancé Docker desktop ou votre engine, puis tapez la commande `docker ps` pour vérifier la connectivité

Une fois ce repository cloné, ouvrez un terminal dans le dossier `blog-app` puis installez les packages npm afin de faire tourner l'appli React.

Essayez ensuite de faire tourner l'application React pour confirmer que tout est bon.

```shell
cd blog-app
npm install
npm run start
```


## Manipulations Docker de base

Le but de ces manipulations est d'utiliser docker en ligne de commande afin de vous familiariser. Il est possible de réaliser ces opérations via le dashboard Docker Desktop mais il y a moins d'intérêt.

À l'aide de la documentation docker et de vos connaissances, trouvez les commandes Docker pour effectuer les actions suivantes :
 - Télécharger l'image `postgres` avec le tag `14.1`. Quelle commande peut-on utiliser pour vérifier le téléchargement ?
 - Après un rapide changement d'avis, supprimez l'image que vous venez de télécharger
 - Lancer un container interactif avec l'image `alpine`. Cela devrait vous permettre d'accéder à un terminal dans une machine linux alpine.
   - Tapez la commande `exit` dans le terminal du container. Le container va s'arrêter.
   - Si j'utilise la commande `docker ps`, mon container alpine n'apparaît pas. Pourquoi ? Comment puis-je le lister ?
   - Comment puis-je supprimer ce container arrêté ?
 - Créer un `network` nommé `test`. Comment puis-je lister les networks existants ?
 - Lancer un container `alpine` interactif en arrière plan avec les paramètres suivants :
   - Le container doit être enregistré sur le network `test`
   - Lier le port `5000` de ma machine hôte avec le port `8000` du container
   - Passer une variable d'environnement nommée `TEST` qui contiendra une valeur de votre choix
 - La commande devrait vous afficher l'identifiant du container lancé en arrière plan. Comment vérifier que mon container est bien lancé et est toujours actif ? Comment puis-je vérifier que le port est bien partagé avec mon hôte ?
 - Ouvrir un terminal dans le container qui tourne en arrière plan. Une fois le terminal ouvert, tapez la commande `env | grep TEST`. La variable d'environnement passée devrait apparaître.
 - Fermer le terminal puis supprimer le container

## Lancer un container pour une API Node Express

Pour cette partie, vous aurez besoin de faire tourner l'application React blog-app.
Une fois sur l'app, si vous vous rendez sur la page `Articles` une erreur devrait apparaître vous informant que l'application n'a pas pu récupérer les articles sur le réseau.
L'appli React tente de récupérer les articles sur l'adresse `http://localhost:8000`.
Le but de cet exercice est de lancer l'API express présente dans le dossier `express-api` à l'aide de Docker.

Voici la liste des grandes étapes :
   - `build` le Dockerfile présent dans le dossier `express-api` et tagger l'image avec un nom explicite
   - `run` un container utilisant ce tag pour lancer l'api. L'api est servie sur le port `8000` du container.

Le résultat attendu est de pouvoir visualiser les articles sur l'application React.

## Lancer plusieurs containers pour une base de données et une API Python Django

Le but de cet exercice est le même que le précédent. Assurez-vous de bien arrêter le container node lancé à l'exercice précédent. Vous aurez besoin de libérer le port `8000`.

A l'inverse de l'exercice précédent, l'api django a besoin d'une base de données PostgresQL pour persister et servir les données.

Le Dockerfile pour l'api python est situé dans le dossier `python-django/blogapp`

Documentation pour l'image postgres: https://hub.docker.com/_/postgres/

Voici quelques indices :
 - Il vous faudra deux containers capables de communiquer l'un avec l'autre. L'un d'entre eux sera basé sur l'image build par le Dockerfile dans le dossier `python-django/blogapp`, l'autre devra utiliser l'image `postgres:14.1`
 - L'application django tente de communiquer avec une base données nommée `articles` suitée à l'adresse `database`, via l'utilisateur `articles` et le mot de passe `articles`. Il n'est pas nécéssaire de modifier la moindre configuration, tout doit se faire au niveau de la configuration réseau des containers.

Le résultat attendu est de pouvoir visualiser les articles sur l'application React.

## Aller plus loin

Écrire un Dockerfile qui permettrait de build et servir l'application React sur le port `80`

Est-il possible d'optimiser l'image afin de réduire la taille en dessous de 100 Mo ?
