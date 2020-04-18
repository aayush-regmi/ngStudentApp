(
    function () {
        angular.module('MockApp')
            .controller('StudentController', StudentController);

        StudentController.$inject = ['$uibModal','StudentService'];

        function StudentController($uibModal , StudentService) {

                var vm = this;
                vm.sortType = 'fname';
                vm.sortReverse = false ;
                vm.message = '';

                //Function to show the list of students
                vm.$onInit = function () {
                    vm.students = StudentService.list();
                }

                // Function to close the alert
                vm.closeThisAlert = function(){
                    vm.message = false;
                }

                //Function to reverse the sorting
                vm.reverseSortFunc = function(){
                    vm.sortReverse =! vm.sortReverse;
                }

                //open Add Student & Edit Student Modal
                vm.open = function (student) {
                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/student/studentModal.html',
                        controller: 'StudentModalController as studentModalCtrl',
                        size: 'md',
                        resolve:{
                            newStudent:function(){
                                return student;
                            }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        if(result.actionType == 'Add Student')
                            vm.message = result.studentName + " has been added";
                        else
                            vm.message = result.studentName + " has been edited";
                    }, function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });

                }

                //open Delete Student Modal
                vm.openDelete = function (student) {
                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/student/deleteModal.html',
                        controller: 'DeleteModalController as delModalCtrl',
                        size: 'md',
                        resolve:{
                            stud:function(){
                                return student;
                            }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        console.log('result: ' + result);
                        vm.message = result + " has been deleted";
                    }, function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });
                }

                //Function to open Delete Modal on click of delete
                vm.delete = function(id){
                    vm.openDelete(id);
                }

                //Function to open Edit Modal on click of edit
                vm.edit = function(student){
                    vm.open(student);
                }

        }
    }
)();