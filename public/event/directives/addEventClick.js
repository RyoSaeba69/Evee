/**
 * Created by antoine on 1/21/15.
 */

angular.module('evee.event')
    .directive('addEventClick', ['addEventModal', 'authService', '$state', 'eveeHttp', 'eveeLoader',
        function (addEventModal, authService, $state, eveeHttp, eveeLoader) {
            return {
                restrict: 'A',
                link: function (scope, element) {


                    element.on('click', function () {

                        // TODO: Uncomment when not dev
                        if(!authService.isLogged()){
                            return;
                        }

                        addEventModal.open()
                            .result.then(function (newEvent) {
                                eveeLoader.show();
                                newEvent.modules = [
                                    {name: 'testModule1', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule2', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule3', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule4', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule5', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule6', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule7', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule8', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule9', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule10', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule11', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule12', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule13', directive: {name:'hello-module', options: {foo: 'Bar'}}},
                                    {name: 'testModule14', directive: {name:'hello-module', options: {foo: 'Bar'}}}
                                ];
                                console.log('NEW EVENT to save', newEvent);
                                eveeHttp.post('events/save', {
                                    data: newEvent
                                }).success(function (data) {
                                    $state.go('event', {eventId: data._id});
                                    eveeLoader.hide();
                                });
                            }, function () {
                                console.log('CLOSED');
                            });
                    });
                }
            };
        }]);