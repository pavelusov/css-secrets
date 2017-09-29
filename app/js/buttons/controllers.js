import {module} from "./module";

const dataButtons = require('./data/left-menu.yaml');

module.controller('leftMenuMainController', $scope => {
    $scope.buttonsleftMenu = dataButtons;
});
