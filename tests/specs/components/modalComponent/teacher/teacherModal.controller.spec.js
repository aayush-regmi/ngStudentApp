/**
 * Created by maddog on 2/28/2018.
 */

(function () {
    'use strict'

    beforeEach(module('MockApp'));

    describe('Testing the Teacher Modal Controller', function () {
        var _$uibModalInstance = {
            close: angular.noop,
            dismiss: angular.noop,
        }
        var _mockTeacherService, _$controller, _$scope;
        var newTeacher = {'id': 1};

        beforeEach(inject(function ($controller, $rootScope, TeacherService) {
            _$scope = $rootScope.$new();
            _mockTeacherService = TeacherService;
            _$controller = $controller('TeacherModalController as teacherModalCtrl', {
                $scope: _$scope,
                $uibModalInstance: _$uibModalInstance,
                newTeacher: newTeacher,
            });
        }))

        describe('Testing the components', function () {

            it('Should call ok function', function () {
                spyOn(_mockTeacherService, 'save').and.callThrough();
                spyOn(_$uibModalInstance, 'close').and.callThrough();
                _$controller.ok();
                expect(_mockTeacherService.save).toHaveBeenCalled();
                expect(_$uibModalInstance.close).toHaveBeenCalled();
            })

            it('Should call cancel function', function () {
                spyOn(_$uibModalInstance, 'dismiss').and.callThrough();
                _$controller.cancel();
                expect(_$uibModalInstance.dismiss).toHaveBeenCalled();
            })

            it('Should run the else modalTitle', function () {
                var vm = _$controller;
                vm.setModalTitle(undefined);
                expect(vm.modalTitle).toEqual('Add Teacher');
                //var newTeacher = {};
                // _$controller.setModalTitle();
                // expect(_$controller.modalTitle).toBe('Add Teacher');
            })

        })
    })
})();

