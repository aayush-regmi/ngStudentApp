(function(){
    'use strict';

    var Teacher = require('./teacher.page.js');

    describe('teacher',function(){

        var baseUrl = browser.baseUrl,
        teacher = new Teacher();

        beforeEach(function(){
            browser.get('#!/teacher');
        });

        describe('teacher page element',function(){

            it('should load the teacher page', function(){
                expect(browser.getTitle()).toEqual('My AngularJS App');
                expect(browser.getCurrentUrl()).toBe(baseUrl+'#!/teacher');
            })

            it('should return the list of teachers',function(){
                teacher.tableRow.then(function(items) {
                    expect(items.length).toBe(12);
                    expect(items[0].getText()).toBe('S/N Name Email Address Action');
                });
            })

            it('should add a teacher object',function(){
                teacher.addTeacher.click();
                teacher.name.sendKeys('Rabin Naga');
                teacher.email.sendKeys('rabin.naga@f1soft.com');
                teacher.confirmAdd.click();
                //expect(teacher.tableRow.length).toBe(13);
                teacher.tableRow.then(function(items){
                    expect(items.length).toBe(13);
                })
            })

            it('should edit a teacher object',function(){
                teacher.editTeacher.click();
                teacher.name.clear().sendKeys('Fone Soft');
                teacher.confirmEdit.click();

                teacher.tableRow.then(function(items){
                    expect(items.length).toBe(12);
                })
            })

            it('should delete a teacher object',function(){
                teacher.deleteRow.click();
                teacher.confirmDelete.click();
                teacher.tableRow.then(function(items) {
                    expect(items.length).toBe(11);
                });
            })

            it('should return 2 teacher objects on search',function(){
                teacher.search.sendKeys('chelsey');
                teacher.tableRow.then(function(items){
                    expect(items.length).toBe(3);  // including the result, header row and noresult row
                })
            })
        })


    })
    }
)();
