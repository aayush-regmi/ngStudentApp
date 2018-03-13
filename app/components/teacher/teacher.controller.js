(
    function () {
        angular.module('MockApp')
            .controller('TeacherController', TeacherController);

        TeacherController.$inject = ['$uibModal','TeacherService', '$scope'];

        function TeacherController($uibModal , TeacherService ,$scope) {

                var vm = this;
                vm.sortType = 'name';
                vm.sortReverse = false ;
                vm.message = TeacherService.getMessage;

               // $scope.$on("updateMessage", function(event, data){
               //   if(data){
               //       vm.message = data;
               //   }
               // });

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
                    vm.sortReverse =! vm.sortReverse;
                }

                //open Add Student & Edit Student Modal
                vm.open = function (teacher) {
                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/teacher/teacherModal.html',
                        controller: 'TeacherModalController as teacherModalCtrl',
                        size: 'md',
                        resolve:{
                            newTeacher:function(){
                                return teacher;
                            }
                        }
                    });

                    modalInstance.result.then(function (result) {
                        if(result.actionType == 'Add Teacher')
                            vm.message = result.teacherName + " has been added";
                        else
                            vm.message = result.teacherName + " has been edited";
                    }, function () {
                        console.info('Modal dismissed at: ' + new Date());
                    });
                }

                //open Delete Student Modal
                vm.openDelete = function (teacher) {
                    var modalInstance = $uibModal.open({
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'components/modalComponent/teacher/deleteTeacherModal.html',
                        controller: 'DeleteTeacherModalController as delTeacherModalCtrl',
                        size: 'md',
                        resolve:{
                            Teacher:function(){
                                return teacher;
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
                vm.delete = function(teacher){
                    console.log(teacher);
                    vm.openDelete(teacher);
                }

                //Function to open Edit Modal on click of edit
                vm.edit = function(teacher){
                    vm.open(teacher);
                }

        }
    }
)();