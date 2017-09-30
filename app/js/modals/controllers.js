import {module} from './module';

module.controller('modalsController', ($scope, $element) => {
    $scope.buttonsRepository = [];
    $scope.pushRepository = button => {
        $scope.buttonsRepository.push(button);
    };
    $scope.callModal = event => {
        $scope.pushRepository(event.target);
    };
});
