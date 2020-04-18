(
    function(){
        angular.module('MockApp')
            .directive('formatPhone',formatPhone);

        function formatPhone(){
            var directive = {
                link: link,
                restrict: 'EA'
            };
            return directive;

            function link(scope, elem, attrs) {
                console.log('format phone directive');

                elem.bind('keyup',function(e){
                    var value = elem.val()
                    value = value.toString();
                    value = value.replace(/[^0-9]/g, '');

                    //console.log(value.length);
                    switch(true){
                        case (value.length > 5): {
                            console.log('>5');
                            value = value.slice(0, 5) + "-" + value.slice(5);
                        }
                        case (value.length > 11): {
                            console.log('11')
                            value = value.slice(0, 11);
                        }
                    }

                    // if(value.length > 5){
                    //     value = value.slice(0,5) + "-" + value.slice(5);
                    // }
                    // if(value.length > 11){
                    //     value = value.slice(0,11);
                    // }
                    elem.val(value);
                })
            }
        }
    }
)();
