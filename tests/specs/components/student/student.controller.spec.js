(
    function () {
        'use strict';

        describe('Testing Student Controller',function(){
            beforeEach(module('MockApp'));
            var _$scope, _$controller ,_$uibModal ,_mockStudentService, _$q;

            beforeEach(inject(function($uibModal,StudentService, $rootScope, $controller, $q){
                _$scope = $rootScope.$new();
                _$q = $q;
                _$uibModal = $uibModal;
                _mockStudentService = StudentService;

                _$controller = function () {
                    return $controller('StudentController as studentCtrl',{
                        $scope : _$scope
                    });
                };
            }));

            describe(',testing the Components',function(){

                it('should run $onInit function',function(){
                    spyOn(_mockStudentService,'list').and.callThrough();
                    var vm = _$controller();
                    vm.$onInit();
                    expect(_mockStudentService.list).toHaveBeenCalled();
                })

                it('should run closeThisAlert function',function(){
                    var vm = _$controller();
                    vm.closeThisAlert();
                    expect(vm.message).toBe(false);
                })

                it('Should run the reverseSortFunc function',function(){
                    var vm = _$controller();
                    vm.reverseSortFunc();
                    expect(vm.sortReverse).toBe(true);
                })

                //Writing test for open function
                it('Testing open function for true case', function () {
                    var vm  = _$controller();
                    var modalInstance = {studentName:'rabin',actionType:'Add Student'};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Testing open function for false case', function () {
                    var vm  = _$controller();
                    var modalInstance = {studentName:'rabin',actionType:'Edit Student'};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Testing open function for reject case', function () {
                    var vm  = _$controller();
                    var modalInstance = {};
                    var deferred = _$q.defer();
                    deferred.reject(modalInstance);
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.open();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                // Writing Test for Opening Delete Modal
                it('Testing open delete modal function for success', function () {
                    var vm  = _$controller();
                    var modalInstance = {};
                    var deferred = _$q.defer();
                    deferred.resolve(modalInstance);
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.openDelete();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('Testing open delete modal function for failure', function () {
                    var vm  = _$controller();
                    //var modalInstance = {};
                    var deferred = _$q.defer();
                    deferred.reject();
                    var mockModalInstance = {result: deferred.promise};
                    spyOn(_$uibModal,'open').and.returnValue(mockModalInstance);
                    vm.openDelete();
                    _$scope.$digest();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                //Writing test for Edit Function
                it('should call edit function', function(){
                    var vm = _$controller();
                    spyOn(_$uibModal,'open').and.callThrough();

                    vm.edit();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })

                it('should call delete function',function(){
                    spyOn(_$uibModal,'open').and.callThrough();
                    var vm = _$controller();
                    vm.delete();
                    expect(_$uibModal.open).toHaveBeenCalled();
                })


            })
        })
    }
)();


