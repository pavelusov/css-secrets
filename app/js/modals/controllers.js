import {module} from './module';

class Modal {
    constructor (button) {
        this.button = button;
    }
    get id () {
        return this.button.dataset.modal;
    }
}

module.controller('modalsController', ($scope, $element) => {
    $scope.buttonsRepository = [];
    $scope.pushRepository = button => {
        $scope.buttonsRepository.push(button);
    };
    $scope.isActive = false;
    $scope.overlayToggle = () => {
        $scope.isActive = !$scope.isActive;
    };

    $scope.currentButton = null;
    $scope.$watch('currentButton', (buttonNew, buttonOld) => {
    });
    $scope.hideOverlay = () => {
        $scope.overlayToggle();
    };

    $scope.callModal = event => {
        $scope.currentButton = new Modal(event.target);
        console.log($scope.currentButton.id, 'get id');
        $scope.overlayToggle();
    };
});
