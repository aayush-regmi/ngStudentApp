(function () {
    'use strict';
    angular.module('MockApp')
        .factory('TeacherService', TeacherService);

    TeacherService.$inject = ['$http', '$q'];

    function TeacherService($http, $q) {

        var uid = 1;
        var teachers = [];
        var message = '';

        var teacherService = {
            message:'',
            list: list,
            save: save,
            delete: deleteTeacher,
            getMessage: getMessage,
            saveMessage: saveMessage,
            closeMessage:closeMessage
        };

        function list() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
            }).then(function (response) {
                var results = response.data;
                teachers = response.data;
                uid = teachers.length;
                deferred.resolve(results);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        function save(newstudent) {
            if (newstudent.id == null) {
                newstudent.id = ++uid;
                teachers.push(newstudent);
            }
            else {
                angular.forEach(teachers, function (eachTeacher, index) {
                    if (eachTeacher.id == newstudent.id)
                        teachers[index] = newstudent;
                })
            }
        }

        function deleteTeacher(id) {
            angular.forEach(teachers, function (eachTeacher, index) {
                if (eachTeacher.id == id)
                    teachers.splice(index, 1);
            })
        }

        function saveMessage(newMessage) {
            teacherService.message = newMessage;
            console.log(message);
        }

        function getMessage() {
            console.log('Returned Message' + message);
            return teacherService.message;
        }

        function closeMessage(){
            return teacherService.message = false;
        }

        return teacherService;
    }
})();