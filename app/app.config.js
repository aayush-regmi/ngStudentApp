(
    function () {
        angular.module('MockApp')
            .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider','$qProvider'];

        function config($stateProvider, $urlRouterProvider ,$qProvider) {

            $qProvider.errorOnUnhandledRejections(false);

            //Route to home page.
            $urlRouterProvider.otherwise('/student');

            //States in the application
            $stateProvider

                .state('student',{
                    url:'/student',
                    templateUrl:'components/student/student.html',
                    controller:'StudentController as studentCtrl'
                })

                .state('teacher',{
                    url:'/teacher',
                    templateUrl:'components/teacher/teacher.html',
                    controller:'TeacherController as teacherCtrl'
                })

                .state('register',{
                    url:'/register',
                    templateUrl:'components/register/register.html',
                    controller:'RegisterController as registerCtrl'
                })

                // .state('test',{
                //     url:'/test',
                //     templateUrl:'components/jasmine/test.html',
                //     controller:'TestController as testCtrl'
                // });
        }
    }
)();