import {module} from './module';

class Modal {
    constructor (button) {
        this.button = button;
    }
    get id () {
        return this.button.dataset.modal;
    }
}

module.controller('modalsController', ($scope, $timeout) => {
    $scope.isActive = false;
    $scope.overlayToggle = () => {
        $scope.isActive = !$scope.isActive;
    };
    $scope.hideModule = () => {
        $scope.overlayToggle();
    };
    $scope.currentButton = null;
    $scope.hideOverlay = () => {
        $scope.overlayToggle();
    };
    $scope.callModal = event => {
        $scope.currentButton = new Modal(event.target);
        $scope.overlayToggle();
    };
    $scope.$on('responseData', (event, res) => {
        $scope.responseText = res.message;
        $scope.isResponse = res.response;
        $timeout(() => {
            $scope.isResponse = !$scope.isResponse;
            $scope.currentButton = null;
            if ($scope.isActive) {
                $scope.isActive = false;
            }
        }, 2000);
    })
});
