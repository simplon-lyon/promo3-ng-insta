Faire une mini app de partage de photo (d'animaux mignons) avec possibilité d'ajouter/supprimer des photos et de liker celles des autres

Fonctionnalités Non connecté.e : 
- Afficher les users
- Sélectionner un user pour afficher ses pictures
- Se connecter

Fonctionnalités Connecté.e :
- Liker les pictures (une fois)
- annuler un like
- ajouter une picture
- supprimer une de ses picture
- se déconnecter

1) Faire un nouveau projet angular avec un json-server, un github et tout
2) Faire la base de donnée avec des users bidons dans le db.json 
3) Faire les classes entités : User { id:number, username:string, password:string } 
Picture { id:number, description:string, link:string, owner:number, likes:number[] }

Gestion User :
1) Faire un serviceUser pour récupérer tous les users, récupérer un user spécifique
2) Faire un serviceAuthentication avec une méthode login, logout et un currentUser en propriété (ce service permettra de savoir si on est présentement connecté ou pas)
3) Faire un component login qui utilisera le serviceAuth pour afficher soit le formulaire de login soit le bouton de déconnexion
4) Faire un component feed qui affiche tous les users existant


Gestion Pictures : 
1) Faire un servicePicture qui fait le crud sur les pictures
2) Faire un component picture-list qui affiche toutes les pictures liées à un id user spécifique (le picture.owner) avec leur description, leur like et tout
3) Faire que quand l'id user du picture-list correspond à l'id du user connecté, alors on puisse supprimer et ajouter des images sur cette même page (en vous basant sur ce qu'on a déjà fait)