const buttonTemplate = require('./templates/buttonLeftMenu.html');

import {app} from '../app';

app.directive('buttonLeftMenu', () => {
    return {
        restrict: 'E',
        templateUrl: buttonTemplate,
        controller: $scope => {

        }
    };
});
