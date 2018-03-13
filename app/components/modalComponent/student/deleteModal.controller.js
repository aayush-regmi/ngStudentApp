(
    function(){
        angular.module('MockApp')
            .controller('DeleteModalController', DeleteModalController);

        DeleteModalController.$inject = ['$scope', '$uibModalInstance', 'StudentService', 'stud'];

        function DeleteModalController($scope, $uibModalInstance, StudentService ,stud) {
            var vm = this;

            vm.studentName = stud.fname + " " + stud.lname;

            vm.ok = function () {
                StudentService.delete(stud.id);
                $uibModalInstance.close(vm.studentName);
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
)();

