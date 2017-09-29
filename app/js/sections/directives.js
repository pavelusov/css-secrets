import {module} from './module';

const sectionTemplate = require('./templates/section.html');

module.directive('sectionMain', () => {
    return {
        restrict: 'E',
        templateUrl: sectionTemplate,
        controller: $scope => {
        }
    };
});
