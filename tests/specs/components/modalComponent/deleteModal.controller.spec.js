(
    function(){
        'use strict';

        describe('Testing studentModal Controller', function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller ,_mockStudentService;
            var _$uibModalInstance ={
                close: angular.noop,
                dismiss: angular.noop
            };
            var student ={};

            beforeEach(inject(function($controller,$rootScope, StudentService ){
                _$scope=$rootScope.$new();
                _mockStudentService= StudentService;
                _$controller = $controller('DeleteModalController as deleteModalCtrl',{
                    $scope: _$scope,
                    $uibModalInstance: _$uibModalInstance,
                    stud:student,
                });
            }));

            describe('testing the components',function(){
                it('should call ok function', function(){
                    spyOn(_mockStudentService,'delete').and.callThrough();
                    spyOn(_$uibModalInstance,'close').and.callThrough();
                    _$controller.ok();
                    expect(_mockStudentService.delete).toHaveBeenCalled();
                    expect(_$uibModalInstance.close).toHaveBeenCalled();
                })

                it('should call cancel function', function(){
                     spyOn(_$uibModalInstance,'dismiss').and.callThrough();
                    _$controller.cancel();
                    expect(_$uibModalInstance.dismiss).toHaveBeenCalled();
                });
            })
        })
    }
)();
