(
    function(){
        'use strict';

        describe('Testing Student Services',function(){
            beforeEach(module('MockApp'));
            var  _$mockStudentService;

            beforeEach(inject(function(StudentService){
                _$mockStudentService = StudentService;
            }));

            describe('testing service components',function(){
                it('should call list function', function(){
                    spyOn(_$mockStudentService, 'list').and.callThrough();
                    _$mockStudentService.list();
                    expect(_$mockStudentService.list).toHaveBeenCalled();
                })

                it('should call delete function', function(){
                    spyOn(_$mockStudentService, 'delete').and.callThrough();
                    _$mockStudentService.delete(1);
                    expect(_$mockStudentService.delete).toHaveBeenCalled();
                })
            });

            describe('testing save function',function(){
                it('should call save function if newStudent is passed',function(){
                    spyOn(_$mockStudentService, 'save').and.callThrough();
                    var student = {
                    };
                    _$mockStudentService.save(student);
                    expect(_$mockStudentService.save).toHaveBeenCalled();
                })

                it('should call edit function if oldStudent is passed',function(){
                    spyOn(_$mockStudentService, 'save').and.callThrough();
                    var student = {
                        'id': 1
                    };
                    _$mockStudentService.save(student);
                    expect(_$mockStudentService.save).toHaveBeenCalled();
                })
            })

        })
    }
)();
