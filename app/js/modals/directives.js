import {module} from './module';

const questionTemplate = require('./templates/question.html');

let template = questionTemplate;

module.directive('modalForm', () => {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: template,
        controller: ($scope, $http, $element, $timeout) => {
            $scope.regex = {
                word: /^\S+/,
                email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            };
            $scope.isRequest = false;
            $scope.toggleRequestStatus = () => {
                $scope.isRequest = !$scope.isRequest;
            };

            $scope.submitForm = form => {
                // Можно по-разному сформировать данные для отправки
                $scope.isRequest = false;
                let formData = new FormData($element[0]);
                $http.post('forms', formData, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                }).then(res => {
                    $scope.toggleRequestStatus();
                    $scope.$emit('responseData', res.data);
                    // TO-DO Очистить форму
                    $timeout(() => {
                        $scope.toggleRequestStatus();
                    }, 2000);
                }, err => {
                   // TO-DO $scope.emit('responseData', 'Повторите позже');
                });
            };

            $scope.$watch('form', () => {
                $scope.form.nameQuestion.$validators = function (model, view) {
                    let value = model || view;
                    return $scope.regex.word.test(value);
                };
                $scope.form.emailQuestion.$validators = function (model, view) {
                    let value = model || view;
                    return $scope.regex.email.test(value);
                };
                $scope.form.someQuestion.$validators = function (model, view) {
                    let value = model || view;
                    return $scope.regex.word.test(value);
                };
                $scope.form.checkPolitics.$validators = function (model, view) {
                    let value = model || view;
                    return !!value;
                };

                $scope.isValidNameField = () => {
                    return $scope.form.nameQuestion.$validators($scope.form.nameQuestion.$modelValue, $scope.form.nameQuestion.$viewValue);
                };
                $scope.isValidEmailField = () => {
                    return $scope.form.emailQuestion.$validators($scope.form.emailQuestion.$modelValue, $scope.form.emailQuestion.$viewValue);
                };
                $scope.isValidQuestionField = () => {
                    return $scope.form.someQuestion.$validators($scope.form.someQuestion.$modelValue, $scope.form.someQuestion.$viewValue);
                };
                $scope.isValidPoliticsField = () => {
                    return $scope.form.checkPolitics.$validators($scope.form.checkPolitics.$modelValue, $scope.form.checkPolitics.$viewValue);
                };

                $scope.isValidFrom = () => {
                    return $scope.isValidNameField() &&
                        $scope.isValidEmailField() &&
                        $scope.isValidQuestionField() &&
                        $scope.isValidPoliticsField();
                };
            });

        }
    };
});
