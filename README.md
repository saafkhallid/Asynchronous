# Contexte
A la fin de cette serie de défis vous serai capable à repondre aux questions concerant la programmation Javascript Asynchrone `AJAX` en travaillant avec des technologies tel que `XMLHttpRequest` et `Fetch` API pour extraire des données en format `brutes` ou en format `JSON`. Vous serez capable de :

1. Différencier entre la programmation Synchrone et la programmation Asynchrone

2. Utiliser les technologies Asyunchrone XMLHttpRequest & Fetch sous JavaScript

3. Acquerir des connaissance sur les Callbacks, Promises, Async/await, XmlHttpRequest (XHR) et les données JSON

4. ...


## Défi 1 : Local data request from plain text

A la fin de ce défi vous allez apprendre à extraire les données à partir d'un document texte `data.txt` de manière asychrone en utilisant l'objet XHR.



1. Créer un `event listner` de type `click` qui déclenchera la fonction `loadData` .

2. Dans la fonction :

- Créer un objet `XMLHttpRequest`

- Charger les données à partir des données dans le fichier `data.txt`

- Inserer les données les données à l'interieur de la balise `output`

## Défi 2 : Local data request from JSON files

A la fin de ce défi vous allez apprendre à extraire les données à partir d'un document JSON `customer.json & customers.json` de manière asychrone en utilisant l'objet XHR.


1. Créer les `event listner` de type `click` qui déclencherons les fonctions `loadCustomer` & `loadCustomers` .

2. Dans les fonction :

- créer un objet `XMLHttpRequest`

- Charger les données à partir des données dans le fichier `JSON`

- Inserer les données les données à l'interieur de la balise `#customer` & `#customers`

## Défi 3 : CRUD sur un `REST API`

A la fin de ce défi vous allez apprendre à manipuler les données coté serveur en utilisant un `API`, fake, `REST` que nous allons créer en utilisant `json-sever`. C'est `API` nous permettera d'avoir accès à une liste des livres enregistrées dans le fichier `db.json`. Procèdant comme suit : 

1. Installez le package `json-server` (https://www.npmjs.com/package/json-server) en utilisant `NPM`

2. Utilisez cet outil pour générer le lien de l'`API` en se basant sur le fichiers `db.json`

3. Par `XMLHttpRequest`, effectuez du `CRUD` (Create, Read, Update et Delete) en se basant sur les requêtes : `GET` `POST` `PUT` `DELETE`

4. Par `Festch API`, effectuez du `CRUD` (Create, Read, Update et Delete) en se basant sur les requêtes : `GET` `POST` `PUT` `DELETE`

5. Par `Festch API & Asynch/await` effectuez du `CRUD` (Create, Remove,Update et Delete) en se basant sur les requêtes : `GET` `POST` `PUT` `DELETE`

* NB : Affichez la liste des livres dans un `tableau HTML` 
