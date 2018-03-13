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
            var newStudent = {};

            beforeEach(inject(function($controller,$rootScope, StudentService ){
                _$scope=$rootScope.$new();
                _mockStudentService= StudentService;
                _$controller = $controller('StudentModalController as stdModalCtrl',{
                   $scope: _$scope,
                    $uibModalInstance: _$uibModalInstance,
                    //_mockStudentService : StudentService,
                    newStudent : newStudent,
                }
                );
            }));

            describe('testing the components',function(){
                it('should call ok function', function(){
                    spyOn(_mockStudentService,'save').and.callThrough();
                    spyOn(_$uibModalInstance,'close').and.callThrough();
                    _$controller.ok();
                    expect(_mockStudentService.save).toHaveBeenCalled();
                    expect(_$uibModalInstance.close).toHaveBeenCalled();
                })

                it('should call cancel function', function(){
                     spyOn(_$uibModalInstance,'dismiss').and.callThrough();
                    _$controller.cancel();
                    expect(_$uibModalInstance.dismiss).toHaveBeenCalled();
                });

                it('Should run else modalTitle',function(){
                    var vm = _$controller;
                    vm.setModalTitle(undefined);
                    expect(vm.modalTitle).toEqual('Add Student');
                })
            })
        })
    }
)();
