/**
 * Created by JF on 10/03/2015.
 */

angular.module('evee.event')
    .directive('wall', ['Wall', 'authService', 'eveeHttp',
        function (Wall, authService, eveeHttp) {
            return {
                restrict: 'E',
                scope: {
                    WallId: '=',
                    wall: '=model'
                },
                templateUrl: 'event/templates/wall.html',
                link: function (scope) {
                    $('#myTab a').click(function (e) {
                        e.preventDefault()
                        $(this).tab('show')
                    });

                    /*$('#writeMsg').on('click', function () {
                        var $btn = $(this).button('loading')
                        // business logic...
                        $btn.button('reset')
                    });*/

                    scope.saveSubject = function(newPrincipalMessage){
                        var newSubject = {
                            principalMessage : newPrincipalMessage,
                            author : authService.getUser()
                        };

                        scope.wall.subjects.push(newSubject);

                        eveeHttp.post("rest/wall/save", {
                            data: scope.wall
                        });
                    };
                }
            };
        }]);