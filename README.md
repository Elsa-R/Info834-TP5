TP5_6 INFO834
Elsa Ruelle & Anaïs Ferrera

# Socket.io : Chat

Cette application reprend les sources du [tutoriel](http://blog.bini.io/developper-une-application-avec-socket-io/) présent sur le blog [bini.io](http://blog.bini.io), qui est lui même une adaptation du [tutoriel officiel](http://socket.io/get-started/chat/) de socket.io.

## Installation

Si vous n'avez pas bower d'installé sur votre machine, installez-le au préalable de la façon suivante :
```
npm install -g bower
```

Pour installer l'application, téléchargez les sources (zip ou git clone) et exécutez la commande suivante depuis la racine du projet.
```
npm install
bower install
```

## Démarrer l'application
Pour démarrer l'application, exécutez la commande suivante depuis la racine du projet.
```
node server
```

L'application est désormais accesssible à l'url **http://localhost:3000/**.

## Travail réalisé 
L'application de chat fonctionne et nous avons :
* Par l'intermédiaire de Redis les utilisateurs connectés au chat.
* L'ensemble des messages stockés dans MongoDB.
* L'affichage des conversations précédentes entre deux utilisateurs.

* Les ReplicaSet pour permettre une meilleure tolérance aux pannes : 
Nous avons suivis le démarche suivante : https://openclassrooms.com/fr/courses/4462426-maitrisez-les-bases-de-donnees-nosql/4474611-protegez-vous-des-pannes-avec-les-replicaset

Dans un premier temps nous avons créé un dossier data dans lequel nous trois dossiers : R0S1, R0S2 et R0S3.

Ensuite dans une invite de commande nous avons réalisé la ligne suivante :
```
mongod --replSet rs0 --port 27018 --dbpath ./data/R0S1
```

Pour initier le serveur :
```
mongo --port 27018
rs.initiate();
```

Nous avons ajouté deux membres au réplicat en mettant ces deux lignes dans deux invites :
```
mongod --replSet rs0 --port 27019 --dbpath ./data/R0S2
mongod --replSet rs0 --port 27020 --dbpath ./data/R0S3
```

Puis dans mongo nous avons ajouté ces replicats :
```
rs.add("localhost:27019");
rs.add("localhost:27020");
```

Ensuite nous avons défini un arbitre :
Nous avons créé un dossier arb dans data puis dans une invite de commande :
```
mongod --port 3000 --dbpath ./data/arb --replSet rs0
```
Dans mongo nous ajoutons l'arbitre :
```
rs.addArb("localhost:3000")
```

On peut consulter le statut du réplicat avec :
```
rs.status();
```
![image](https://user-images.githubusercontent.com/56952574/114060702-ee454c00-9895-11eb-9b5c-4fd004c81991.png)

Ici on peut voir que le serveur situé sur le port 27018 a été élu PRIMARY.



