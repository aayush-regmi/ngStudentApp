/**
 * Created by maddog on 3/12/2018.
 */

(function(){
    angular.module('MockApp')
        .directive('scrollToBookmark',scrollToBookmark);

    scrollToBookmark.$inject = ['$window'];

    function scrollToBookmark($window){
        var directive = {
            link: function(scope, elem, attrs) {
                var value = attrs.scrollToBookmark;
                elem.bind('click',function() {
                    scope.$apply(function() {
                        var selector = "[scroll-bookmark='"+ value +"']";
                        var element = angular.element(selector);
                        if(element.length)
                            $window.scrollTo(0, element[0].offsetTop - 30); //will go -30 top
                    });
                });
            }
        }

        return directive;
    }
})();
