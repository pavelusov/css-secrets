import {module} from './module';

const questionTemplate = require('./templates/question.html');

module.directive('modalFormQuestion', () => {
    return {
        restrict: 'E',
        templateUrl: questionTemplate,
        controller: ($scope, $http) => {
        }
    };
});
