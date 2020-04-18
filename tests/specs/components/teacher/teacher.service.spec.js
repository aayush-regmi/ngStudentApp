(
    function() {
        'use strict';

        beforeEach(module('MockApp'));
        describe('Testing User Service', function () {
            var _$mockUserService,_$q, $httpBackend,_$scope ,authRequestHandler;
            var url = 'https://jsonplaceholder.typicode.com/users';

            beforeEach(inject(function ($rootScope, TeacherService , _$httpBackend_, $q ) {
                $httpBackend = _$httpBackend_;
                authRequestHandler = $httpBackend.when('GET', url).respond([{}]);
                _$mockUserService = TeacherService;
                _$q = $q;
                _$scope = $rootScope.$new();
            }));

            describe('Testing the components',function(){
                it('Should set result from api call', function(){
                    $httpBackend.when('GET', url).respond();
                    var result = _$mockUserService.list();
                    // console.log(result);
                    _$scope.$digest();
                    $httpBackend.flush();
                })

                it('Should throw error from api call', function(){
                    authRequestHandler.respond(404, '');
                    $httpBackend.when('GET', url);
                    _$mockUserService.list();
                    //_$scope.$digest();
                    $httpBackend.flush();
                })

                it('Should call Save function if newUser is passed',function(){
                    spyOn(_$mockUserService,'save').and.callThrough();
                    var newuser = {};
                    _$mockUserService.list();
                    _$mockUserService.save(newuser);
                    expect(_$mockUserService.save).toHaveBeenCalled();
                })

                it('Should call save function (edit) if oldUser is passed',function(){
                    var vm = _$mockUserService;
                    vm.teachers = [{'id':1},{'id':2}];
                    spyOn(_$mockUserService,'list').and.callThrough();
                    spyOn(_$mockUserService,'save').and.callThrough();
                    _$mockUserService.list();
                    expect(vm.teachers.length).toEqual(2);
                    _$scope.$apply();
                    expect(_$mockUserService.list).toHaveBeenCalled();

                    var newuser = {'id':1};
                    _$mockUserService.save(newuser);
                    expect(_$mockUserService.save).toHaveBeenCalled();
                })

                it('Testing delete function', function(){
                    var vm = _$mockUserService;
                    vm.teachers = [{'id':1},{'id':2}];
                    spyOn(_$mockUserService,'delete').and.callThrough();
                    var id = 2;
                    _$mockUserService.delete(id);
                    expect(_$mockUserService.delete).toHaveBeenCalled();
                })


            });

        })
    }
)();

