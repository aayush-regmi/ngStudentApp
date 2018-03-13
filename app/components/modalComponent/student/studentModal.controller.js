(
    function(){
        angular.module('MockApp')
            .controller('StudentModalController', StudentModalController);

        StudentModalController.$inject = ['$scope', '$uibModalInstance', 'StudentService', 'newStudent'];

        function StudentModalController($scope, $uibModalInstance, StudentService, newStudent) {
            var vm = this;

            vm.setModalTitle = setModalTitle;
            vm.setModalTitle(newStudent);

            function setModalTitle(student){
                if(student)
                    vm.modalTitle="Edit Student";
                else
                    vm.modalTitle="Add Student";
            }

            // if(newStudent)
            //     vm.modalTitle="Edit Student";
            // else
            //     vm.modalTitle="Add Student";

            vm.newstudent=angular.copy(newStudent);

            vm.ok = function () {
                StudentService.save(vm.newstudent);
                vm.studentName = vm.newstudent.fname +" "+ vm.newstudent.lname;
                $uibModalInstance.close({studentName:vm.studentName,actionType:vm.modalTitle});
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
)();

