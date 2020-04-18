/**
 * Created by maddog on 3/2/2018.
 */
(
    function(){
        'use strict';

        beforeEach(module('MockApp'));
        describe('Testing the format phone directive',function(){
            var $compile, scope ,elem;
            var html ='<input type="text" id="phonenumber" ng-model="phonenumber" format-phone>'

            beforeEach(inject(function(_$compile_, _$rootScope_){
                $compile = _$compile_;
                scope = _$rootScope_.$new();
                elem = angular.element(html);
            }))

            describe('Testing the directive components',function(){
                it('Should run the ',function(){
                    elem.val('12345678911');
                    $compile(elem)(scope);
                    elem.triggerHandler("keyup");
                })
            })
        })
    }
)();
