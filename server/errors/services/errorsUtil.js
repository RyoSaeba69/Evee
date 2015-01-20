/**
 * Created by Jean-François on 01/12/2014.
 */

var errorsUtil = {
    callback: function(number) {
        var result = "";
        switch(number) {
            /* Erreur d'enregistrement utilisateur */
            case 0:
                result = "Erreur dans l'enregistrement de l'utilisateur.";
                break;
            case 1:
                result = "L'utilisateur est déjà enregistré";
                break;
        }
    }
};