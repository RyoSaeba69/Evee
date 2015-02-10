/**
 * Created by antoine on 11/22/14.
 */

angular.module('evee')
    .service('eveeLoader', ['$compile', '$rootScope', function($compile, $rootScope){

        this.pendingLoader = 0;
        var loaderElement = null;

        this.show = function (options) {

            options = options || {};

            this.pendingLoader++;


            if(!this.pElement) {

                var pElement = this.pElement = options.parentElement || document.body;
                var template = options.template || '<evee-loader></evee-loader>';

                var compiledFn =  $compile(template);

                var newScope = $rootScope.$new(true);

                compiledFn(newScope, function (clonedElement) {

                    clonedElement.addClass('loader-element');

                    if(!options.classes) {
                        clonedElement.addClass('loader-icon');
                    } else {
                        options.classes.forEach(function(className){
                           clonedElement.addClass(className);
                        });
                    }

                    loaderElement = clonedElement;
                    pElement.appendChild(loaderElement[0]);

                });
            }

        };

        this.hide = function () {

            if(this.pendingLoader > 0) {
                this.pendingLoader--;
            }

            if(!this.pendingLoader) {
                loaderElement.remove();
            }
        }

    }]);