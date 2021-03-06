/**
 * Created by antoine on 10/21/14.
 */

angular.module('evee')
    .config([ '$translateProvider',
        function ($translateProvider) {

            $translateProvider.translations('en', {
                APP_NAME: 'Evee',
                ENGLISH: 'English',
                FRENCH: 'French',
                JAPANESE: 'Japanese',
                LANGUAGES: 'Languages',
                I_AM_THE_HOME: 'I am the home',
                CONNECTION:'Connection',
                LOGIN:'Login',
                MAIL:'Mail',
                PASSWORD:'Password',
                HELP: 'Help',
                NAME: 'Name',
                ABOUT: 'About Evee',
                HISTORY:'Project\'s History',
                DATA: 'Use of personal data',
                LEGAL: 'Legal notices',
                CONTACT: 'Contact us',
                SEND: 'Send',
                CANCEL:'Cancel',
                CONTACT_MAIL: 'Contact us by email',
                CONTACT_FORM: 'Contact us by online form',
                HOME: 'Home',
                USER: 'User',
                ENGAGEMENT: 'Nos engagements',
                WELCOME: 'Welcome to Evee',
                HOME_TEXT: 'This is the home page for the application of events management,',
                SIGN_UP: 'Sign up now!',
                REGISTRATION:'Registration',
                LOG_IN: 'Log in',
                LOG_OUT: 'Log out',
                CREATE_NEW_EVENT: 'Create new event',
                SUCCESSFULLY_LOGIN: 'Successfully login',
                INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
                SUCCESSFULLY_LOGOUT: 'Successfully logout'
            });
        }

    ]);