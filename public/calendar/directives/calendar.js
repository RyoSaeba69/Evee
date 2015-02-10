angular.module("evee.calendar")
    .directive('contactForm', function(){
    return{
        restrict:'E',
        templateUrl:'calendar/templates/calendar.html',
        link:function(scope){
            scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    header: {
                        left: 'title',
                        center: '',
                        right: 'today prev,next'
                    },
                    eventClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventRender: $scope.eventRender
                }
            }
        }

    }
});