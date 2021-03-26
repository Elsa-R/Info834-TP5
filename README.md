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

## Travail réalisé 26/03
Pour le moment l'application de chat fonctionne et nous pouvons voir par l'intermédiaire de Redis les utilisateurs connectés au chat.

Ce qu'il nous reste à faire :
* Stocker l'ensemble des messages dans MongoDB
* Utiliser le ReplicaSet pour permettre une meilleure tolérance aux pannes
* Pouvoir afficher une conversation précédente entre deux utilisateurs
* Sortir des requêtes pertinentes : utilisateur le plus sollicité, celui qui communique le plus, etc.

