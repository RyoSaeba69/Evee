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
                PASSWORD2:'Retaper votre mot de passe',
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
                SIGN_UP: "S'inscrire",
                REGISTRATION:'Inscription',
                NO_AKA_SIGN_UP:'N',
                LOG_IN: 'Connexion',
                LOG_OUT: 'Déconnexion',
                CREATE_NEW_EVENT: 'Créer un nouvel événement',
                TITLE:'Titre',
                DESCRIPTION:'Description',
                SUCCESSFULLY_LOGIN: 'Connexion réussie',
                INVALID_EMAIL_OR_PASSWORD:'Email ou password incorrect !',
                SUCCESSFULLY_LOGOUT: 'Vous avez été déconnecté',
                SUCCESSFULLY_SIGN_UP: 'Inscription réussie, vous pouvez désormais vous connectez !',
                EMAIL_MISSING: 'Merci de renseigner un email',
                USERNAME_MISSING: "Merci de renseigner un nom d'utilisateur",
                PASSWORDS_MISSING: "Merci de renseigner un mot de passe",
                PASSWORDS_DONT_MATCH: "Les deux mots de passes ne correspondent pas",
                EMAIL_EXISTS: "Cette adresse email est existe déjà",
                USER_EXISTS: "Ce nom d'utilisateur existe déjà",
                USER_EXISTS: "Le mot de passe est incorrecte",
            });

            $translateProvider.preferredLanguage('fr');

        }

    ]);