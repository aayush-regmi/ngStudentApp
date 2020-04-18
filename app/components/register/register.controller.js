(function(){
    angular.module('MockApp.Components.Register',[]);
})();

(function(){
    'use strict';

    angular.module('MockApp.Components.Register')
        .controller('RegisterController',RegisterController);

    RegisterController.$inject=[];

    function RegisterController(){
        var vm = this;

        vm.invalid = teacherForm.email.$valid;
    }
})();
