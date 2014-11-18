/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config([ '$translateProvider',
        function ($translateProvider) {

            $translateProvider.translations('fr', {
                APP_NAME: 'Evee',
                ENGLISH: 'Anglais',
                FRENCH: 'Français',
                JAPANESE: 'Japonais',
                LANGUAGES: 'Langues',
                I_AM_THE_HOME: 'Je suis la page d\'accueil',
                CONNECTION:'Connexion',
                MAIL:'Adresse mail',
                PASSWORD:'Mot de passe',
                HELP:  'Aide',
                NAME: 'Nom',
                ABOUT: ' À propos de Evee',
                HISTORY: 'Historique du projet',
                DATA: 'Traitement des données personnelles',
                LEGAL:'Mentions légales',
                CONTACT: 'Nous contacter',
                SEND: 'ENVOYER',
                CONTACT_MAIL: 'Nous contacter par mail',
                CONTACT_FORM: 'Nous contacter via le formulaire en ligne',
                HOME: 'Accueil',
                USER: 'Utilisateur'
            });

            $translateProvider.preferredLanguage('fr');

        }

    ]);