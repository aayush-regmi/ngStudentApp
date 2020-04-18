(
    function(){
        angular.module('MockApp')
            .controller('TeacherModalController', TeacherModalController);

        TeacherModalController.$inject = ['$uibModalInstance', 'TeacherService', 'Teacher'];

        function TeacherModalController($uibModalInstance, TeacherService, Teacher) {
            var vm = this;

            vm.setModalTitle = setModalTitle;
            vm.setModalTitle(Teacher);
            function setModalTitle(teacher){
                if(teacher){
                    vm.modalTitle = 'Edit Teacher'; // add vm.actionType
                    vm.action = 'Edit'
                }else{
                    vm.modalTitle = 'Add Teacher'; // add vm.actionType
                    vm.action ='Add'
                }
            }
            vm.nTeacher = angular.copy(Teacher);

            vm.ok = function () {
                TeacherService.save(vm.nTeacher);
                vm.teacherName = vm.nTeacher.name;
                $uibModalInstance.close({userName:vm.teacherName,actionType:vm.action});
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
)();

