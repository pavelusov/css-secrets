import {module} from './module';

const questionTemplate = require('./templates/question.html');

let template = questionTemplate;

module.directive('modalForm', () => {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: template,
        controller: ($scope, $http) => {
            $scope.isEnableButton = false;
            $scope.submitForm = form => {
                console.log(form);
            }

        }
    };
});
