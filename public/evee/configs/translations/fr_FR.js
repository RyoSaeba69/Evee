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
                HELP:  'Aide',
                NAME: 'Nom',
                ABOUT: ' À propos de Evee',
                HISTORY: 'Historique du projet'
            });

            $translateProvider.preferredLanguage('en');

        }

    ]);