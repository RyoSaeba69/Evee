/**
 * Created by antoine on 1/24/15.
 */

angular.module('evee.event')
    .directive('dispEvent', ['Event', 'WishList', 'addModuleModal', 'eveeHttp',
        function (Event, WishList, addModuleModal, eveeHttp) {
            return {
                restrict: 'E',
                scope: {
                    eventId: '='
                },
                templateUrl: 'event/templates/dispEvent.html',
                link: function (scope) {
                    //scope.event = Event.get({eventId: scope.eventId}, function () {
                    //    console.log('Event fetched ! :)', scope.event);
//                    });

                    eveeHttp.get('/ctrl/event/'+scope.eventId, {
                        //params: {eventId: scope.eventId}
                    }).success(function (data)
                    {
                        scope.event = data;
                    });


                    scope.addModule = function () {


                        addModuleModal.open().result.then(function (moduleToAdd) {
                            // SAVE NEW MODULE HERE

                            if(!moduleToAdd){
                                return;
                            }

                            if(!scope.event.modules){
                                scope.event.modules = [];
                            }
                           // scope.event.modules.push(moduleToAdd);

                            //if(!scope.event.wishList){
                            //    scope.event.wishList = [];
                            //}]

                            eveeHttp.post('ctrl/event/module/saveModule', {
                                data: {
                                    module: moduleToAdd,
                                    eventId: scope.eventId
                                }
                            }).success(function (module) {
                                scope.event.modules.push(module);
                            });

//                            scope.event.wishList.push({name: 'Coucou121', wishes: []});
                            //scope.event.$save();

                            console.log('MODULE TO ADD ', moduleToAdd);
                        }, function () {
                            console.log('MODAL CLOSED');
                        });
                        //
                        //var newWishList = new WishList();
                        //
                        //newWishList.name = 'Coucou test';
                        //scope.event.wishList = newWishList;
                        //
                        //
                        //newWishList.event = scope.eventId;
                        //newWishList.$save({}, function (nw) {
                        //    //scope.event.wishList = nw.id;
                        //    //scope.event.$save();
                        //});

                    };
                }
            };
        }]);