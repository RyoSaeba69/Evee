/**
 * Created by antoine on 1/21/15.
 */

angular.module('evee.event')
    .directive('addEventClick', ['addEventModal', 'authService', '$state', 'eveeHttp', 'eveeLoader', 'Event',
        function (addEventModal, authService, $state, eveeHttp, eveeLoader, Event) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.on('click', function () {

                        // TODO: Uncomment when not dev
                        //if(!authService.isLogged()){
                        //    return;
                        //}

                        addEventModal.open()
                            .result.then(function (newEvent) {
                                //eveeLoader.show();

                                console.log("test scope typeEvent de l'événement : "+newEvent.type);

                                console.log('NEW EVENT to save', newEvent);

                                var eventToSave = new Event(newEvent);
                                eventToSave.$save().then(function (item) {
                                    $state.go('event', {eventId: item.id});
                                }, function () {
                                    console.log('FAILED ', arguments);
                                });

                            }, function () {
                                console.log('CLOSED');
                            });
                    });
                }
            };
        }]);