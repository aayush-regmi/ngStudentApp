/**
 * Created by maddog on 2/28/2018.
 */

(
    function(){
        'use strict'

        angular.module('MockApp')
            .controller('DeleteTeacherModalController',DeleteTeacherModalController);

        DeleteTeacherModalController.$inject=['$uibModalInstance','TeacherService','Teacher'];

        function DeleteTeacherModalController($uibModalInstance,TeacherService,Teacher){
            var vm = this;

            vm.teacherName = Teacher.name;

            vm.ok= function(){
                TeacherService.delete(Teacher.id);
                $uibModalInstance.close(vm.teacherName);
            }

            vm.cancel = function(){
                $uibModalInstance.dismiss('cancel')
            }
        }

    }
)();