(
    function () {
        'use strict';
        angular.module('MockApp')
            .service('StudentService', StudentService);

        StudentService.$inject = ['$http','$q'];
        
        function StudentService($http , $q) {
                var uid = 6;

                var students = [
                    {
                        'id': 1,
                        'fname': 'Rabin',
                        'lname':'Naga',
                        'email': 'rabin.naga@f1soft.com',
                        'address': 'Bhaktapur'
                    },
                    {
                        'id': 2,
                        'fname': 'Bikram',
                        'lname':'Samsohang',
                        'email': 'bikram.samsohang@f1soft.com',
                        'address': 'Bagbazar'
                    },
                    {
                        'id': 3,
                        'fname': 'Aayush',
                        'lname':'Regmi',
                        'email': 'ayush.regmi@gmail.com',
                        'address': 'Battisputali'
                    },
                    {
                        'id': 4,
                        'fname': 'Rowan',
                        'lname':'Siwakoti',
                        'email': 'rowan.siwakoti@f1soft.com',
                        'address': 'Naxal'
                    },
                    {
                        'id': 5,
                        'fname': 'Sumin',
                        'lname':'Shakya',
                        'email': 'sumin.shakya@gmail.com',
                        'address': 'Patan'
                    }
                ];

                this.list = function(){
                    return students;
                }

                this.save = function(newstudent){
                    if(newstudent.id == null) {
                        newstudent.id = uid++;
                        students.push(newstudent);
                        console.log(students);
                    }
                    else{
                        angular.forEach(students, function(eachStudent, index){
                            if(eachStudent.id == newstudent.id)
                                students[index] = newstudent;
                        })
                    }
                }

                this.delete = function (id) {
                    angular.forEach(students,function(eachStudent,index){
                        if(eachStudent.id == id)
                            students.splice(index,1);
                    })
                }
        }
    }
)();