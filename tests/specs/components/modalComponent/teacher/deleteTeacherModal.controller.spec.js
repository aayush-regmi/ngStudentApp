(
    function(){
        'use strict';

        describe('Testing deleteTeacherModal Controller', function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller ,_mockTeacherService;
            var _$uibModalInstance ={
                close: angular.noop,
                dismiss: angular.noop
            };
            var Teacher ={};

            beforeEach(inject(function($controller,$rootScope, TeacherService ){
                _$scope=$rootScope.$new();
                _mockTeacherService= TeacherService;
                _$controller = $controller('DeleteTeacherModalController as deleteTeacherModalCtrl',{
                    $scope: _$scope,
                    $uibModalInstance: _$uibModalInstance,
                    Teacher:Teacher,
                });
            }));

            describe('testing the components',function(){
                it('should call ok function', function(){
                    spyOn(_mockTeacherService,'delete').and.callThrough();
                    spyOn(_$uibModalInstance,'close').and.callThrough();
                    _$controller.ok();
                    expect(_mockTeacherService.delete).toHaveBeenCalled();
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

