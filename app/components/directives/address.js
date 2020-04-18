(
    function(){
        angular.module('MockApp')
            .component('address',{
                // template:
                //     '<b>Street</b> : {{$ctrl.model.street}}<br/> '+
                //     '<b>City</b>: {{$ctrl.model.city}}<br/>'+
                //     '<b>Zipcode</b>: {{$ctrl.model.zipcode}} ',
                templateUrl: 'components/directives/templates/address.html',
                bindings:{
                    value: '=',
                }
            });
    }
)();
