import {module} from "./module";

module.controller('contentMainController', ($scope, $timeout) => {
    $scope.showTitle = false;
    $timeout(() => {
        $scope.showTitle = true;
    }, 1000);
});
