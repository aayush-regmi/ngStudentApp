(
    function () {
        'use strict';

        angular.module('MockApp',[
            'ui.router',
            'ui.bootstrap',
            'ngMessages',
            'MockApp.Components',
        ])
    }
)();

(function(){
    'use strict';

    angular.module('MockApp.Components',[
            'MockApp.Components.Register',
    ])
})();