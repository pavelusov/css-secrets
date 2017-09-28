import {module} from "./module";

const buttonTemplate = require('./templates/buttonLeftMenu.html');

module.directive('buttonLeftMenu', () => {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            fontAwesome: '@'
        },
        templateUrl: buttonTemplate,
        controller: $scope => {
            $scope.showContent = content => {

            }
        }
    };
});
