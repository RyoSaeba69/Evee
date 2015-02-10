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
                LOGIN:'Se connecter',
                MAIL:'Adresse mail',
                PASSWORD:'Mot de passe',
                HELP:  'Aide',
                NAME: 'Nom',
                ABOUT: ' À propos de Evee',
                HISTORY: 'Historique du projet',
                DATA: 'Traitement des données personnelles',
                LEGAL:'Mentions légales',
                CONTACT: 'Nous contacter',
                SEND: 'Envoyer',
                CANCEL:'Annuler',
                CONTACT_MAIL: 'Nous contacter par mail',
                CONTACT_FORM: 'Nous contacter via le formulaire en ligne',
                HOME: 'Accueil',
                USER: 'Utilisateur',
                ENGAGEMENT: 'Nos engagements',
                WELCOME: 'Bienvenue dans Evee',
                HOME_TEXT: 'Ceci est la page d\'accueil pour l\'application de gestion d\'événements,',
                SIGN_UP: 'Inscription',
                REGISTRATION:'Inscription',
                LOG_IN: 'Connexion',
                LOG_OUT: 'Déconnexion',
                CREATE_NEW_EVENT: 'Créer un nouvel événement',
                TITLE:'Titre',
                DESCRIPTION:'Description',
                SUCCESSFULLY_LOGIN: 'Connexion réussie',
                INVALID_EMAIL_OR_PASSWORD:'Email ou password incorrect !',
                SUCCESSFULLY_LOGOUT: 'Vous avez été déconnecté'
            });

            $translateProvider.preferredLanguage('fr');

        }

    ]);