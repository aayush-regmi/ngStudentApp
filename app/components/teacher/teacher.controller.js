(
    function () {
        angular.module('MockApp')
            .controller('TeacherController', TeacherController);

        TeacherController.$inject = ['$uibModal','TeacherService', 'APP_CONSTS'];

        function TeacherController($uibModal , TeacherService ,APP_CONSTS) {

                var vm = this;
                vm.sortType = 'name';
                vm.sortReverse = false ;
                vm.message = TeacherService.getMessage;

                //Function to show the list of students
                vm.$onInit = function () {
                    TeacherService.list().then(
                        function (response) {
                            vm.teachers = response;
                        },
                        function (error) {
                            console.log(error);
                        }
                    );
                }

                // Function to close the alert
                vm.closeThisAlert = function(){
                    vm.message = TeacherService.closeMessage;
                }

                //Function to reverse the sorting
                vm.reverseSortFunc = function(){
                    vm.sortReverse = !vm.sortReverse;
                }

                // The CRUD operation is in teacher-modal.directive.js
        }
    }
)();