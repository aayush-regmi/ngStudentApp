/**
 * Created by maddog on 3/4/2018.
 */

// file-name = TeacherModal
// controller-name = TeacherModalController = fileName+Controller
        // The filename and controller name should be same where the controller name adds Controller as Suffix.
// controller-as = teacherModalCtrl



(
    function(){
        angular.module('MockApp')
            .directive('teacherModal',teacherModal);

        function teacherModal(){
            var directive = {
                restrict: 'EA',
                scope:{
                    'title': '@buttonTitle',
                    'class': '@buttonClass',
                    //'folderName':'@folderName',
                    'ctrlAs':'@controllerAs',
                    'fileName': '@fileName',
                    modalValue: '=',
                },
                template:'<a type="button" class="{{class}}" ng-click="modalDCtrl.open(modalValue,fileName,ctrlAs)">{{title}}</a>',
                controller:'modalDirectiveController as modalDCtrl',
            }
            return directive;
        }

        angular.module('MockApp')
            .controller('modalDirectiveController', modalDirectiveController);

        modalDirectiveController.$inject = ['$uibModal','TeacherService','$scope', 'APP_CONSTS'];

        function modalDirectiveController($uibModal , TeacherService , $scope, APP_CONSTS){
            var vm = this;
            $scope.message = null;
            var msg;

            vm.open = function(teacher,fileName,ctrlAs){
                var controllerName = 'TeacherModalController';
                console.log('open function of teacher modal ctrl' + fileName);

                var modalInstance = $uibModal.open({
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'components/modalComponent/teacher/'+fileName+'.html',
                    controller: fileName+'Controller as '+ctrlAs,
                    size: 'md',
                    resolve:{
                        Teacher:function(){   //Teacher should also be passed from the directive later on
                            return teacher;
                        }
                    }
                });

                modalInstance.result.then(function (result) {
                    if(result.actionType == 'Add')
                        msg = result.userName + APP_CONSTS.ADD_ALERT;
                    else if(result.actionType == 'Delete')
                        msg = result.userName + APP_CONSTS.DELETE_ALERT;
                    else
                        msg = result.userName + APP_CONSTS.EDIT_ALERT;

                    TeacherService.saveMessage(msg); //save to message to the TeacherService
                }, angular.noop);
            }
        }

    }
)();

