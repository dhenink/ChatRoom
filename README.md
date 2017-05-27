Chat room projet pour le titre pro

Télécharger le projet

Configurer le fichier parameters.yml.dist en remplaçant par vos données
puis enlevez l'extension .dist.

Créer la base de données en lançant la commande php bin/console doctrine:database:create

Créer le schéma de base de données en lançant la commande php bin/console doctrine:schema:create

Puis lancez les fixtures avec la commande php bin/console doctrine:fixtures:load

3 comptes sont créés:

- pseudo et mot de passe du 1er: root
- pseudo et mot de passe du 2eme: admin
- pseudo et mot de passe du 3eme: utilisateur