/**
 * Created by antoine on 1/20/15.
 */
angular.module('evee')
    .directive('eveeHome', ['addEventModal', 'authService', 'eveeHttp',
        function (addEventModal, authService, eveeHttp) {
            return {
                restrict: 'E',
                templateUrl: 'evee/templates/eveeHome.html',
                link: function (scope) {

                    //scope.isLogged = function () {
                    //    return authService.isLogged();
                    //};
                    //
                    //scope.addNewEvent = function () {
                    //    addEventModal.open().result.then(function (newEvent) {
                    //        console.log('NEW EVENT to save', newEvent);
                    //        eveeHttp.post('events/save', {
                    //            data: newEvent
                    //        });
                    //    }, function () {
                    //        console.log('CLOSED');
                    //    });
                    //};
                }
            }
        }]);