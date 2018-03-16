# exogame
Jeu interactif à plusieurs autour de JavaScript (et éventuellement Node.JS à terme).

## Concept

Le concept est de rassembler plusieurs **membres de la communauté** sur un chat vocal et visuel pour **échanger et réaliser** des défis (exercices) JavaScript/NodeJS. Chaque participant devra **se connecter à un Serveur socket** (représentant le jeu en lui même). 

Le jeu se déroulera en **plusieurs étapes** : 

- Connexion des participants au serveur socket (avec **un client fournit avant l'évènement**).
- Un **administrateur** de l'évènement démarre le jeu par le **biais d'une commande socket**.
- Chaque participant prépare un exercice dans un temps imparti (des règles borneront la rencontre).
- Une fois le temps écoulés, le serveur récupère et vérifie la validité de l'intégralité des exercices.
- Le jeu va choisir aléatoirement un participant et un exercice (qui ne peut bien évidemment pas être son propre exercice).
- Le jeu laissera un temp de préparation (pour lire mais aussi pour qu'il puisse partager son écran aux autres développeurs).
- Le participant devra valider l'exercice avant le temps défini (par les règles de la rencontre ou l'exercice lui même).

Et ansi de suite jusqu'au dernier développeur. Le jeu pourra éventuellement être recommencé (un nouveau round en soi).

Le jeu ne possède aucune notion de "score" (L'objectif n'étant pas de démontrer la supériorité d'un ou plusieurs développeurs dans la résolution d'un exercice).

## Objectifs

L'objectif de cet évènement est avant tout de passer un bon moment avec les membres de la communauté (Apprendre à toujours mieux nous connaître tout en restant convivial et accessible aux développeurs débutants).

Il y aura sûrement plusieurs étapes à franchir (techniquement) avant d'aboutir à quelque chose de satisfaisant. (Comme pouvoir faire des exercices autour de Node.JS et autres).

## Contraintes

- Avoir un microphone pour intéragir.
- Ne marche qu'avec un nombre restreint de participants.
- Chaque participant doit venir avec bonne foi et respecter les règles (le non-respect des règles sera considéré comme une enfreinte au code de conduite et pourra résulter **d'une exclusion définitive** de la communauté).
- Sécuriser le serveur et le client (pour éviter tout problème).

## Stack

- Socket.io (viser la simplicité, la performance n'est pas un besoin du projet).
- VM2 (Exécuter les codes des participants dans une sandbox qui respectera les règles du jeu).

Éventuellement penser à une interface Web qui pourrait se mettre à jour avec les comptes à rebours etc. (Affichage de l'exercice avec formatage HTML...).
