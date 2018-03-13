/**
 * Created by maddog on 3/12/2018.
 */

(function(){
    angular.module('MockApp')
        .directive('scrollToBookmark',scrollToBookmark);

    scrollToBookmark.$inject = [];

    function scrollToBookmark(){
        var directive = {
            link: function(scope, elem, attrs) {
                var value = attrs.scrollToBookmark;

                console.log(value);
                elem.bind('click',function() {
                    //scope.$apply(function() {
                        var selector = "[scroll-bookmark='"+ value +"']";
                        var element = angular.element(selector);
                        if(element.length)
                            window.scrollTo(0, element[0].offsetTop - 30);
                    //});
                });
            }
        }

        return directive;
    }
})();
