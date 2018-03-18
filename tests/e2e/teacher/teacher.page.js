(function(){
    'use strict'

    var TeacherPageObject = function(){
        this.tableRow = element.all(by.css('tr'));

        this.addTeacher = element(by.id('add'));
        this.name = element(by.model("teacherModalCtrl.nTeacher.name"));
        this.email = element(by.model("teacherModalCtrl.nTeacher.email"));
        this.confirmAdd = element(by.id('confirmAdd'));

        this.editTeacher = element.all(by.id('edit')).first();
        this.confirmEdit = element(by.id('confirmEdit'));

        this.deleteRow = element.all(by.id('delete')).first();
        this.confirmDelete = element(by.id('confirmDelete'));

        this.search = element(by.model('search'));

        //element.all(by.css('tr'))
    };

    module.exports = TeacherPageObject;
})();