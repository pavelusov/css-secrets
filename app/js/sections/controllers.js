import {module} from './module';

module.controller('sectionsController', ($scope, $element, $timeout) => {
    const leftColumn = $element[0].querySelector('.leftColumnSection'),
        rightColumn = $element[0].querySelector('.rightColumnSection');

    $scope.sections = ['intro'];
    $scope.sectionTitle = '';
    $scope.isActiveContent = false;
    $scope.transitionContent = () => {
        $scope.isActiveContent = !$scope.isActiveContent;
    };

    $scope.$on('sectionContent', (event, section) => {
        const changeContent = () => {
            $scope.transitionContent();
            if (angular.isElement(leftColumn) && angular.isElement(rightColumn)) {
                $scope.sectionTitle = section.title;
                leftColumn.innerHTML = section.html;
                rightColumn.innerHTML = section.rules;
            }
        };

        $scope.sections.pop();
        $scope.sections.push('section');

        if (!$scope.isActiveContent) {
            changeContent();
        } else {
            $scope.transitionContent();
            $timeout(() => {
                changeContent();
            }, 800);
        }
    });
    $scope.checkShowSection = (section) => {
        return $scope.sections.some(s => {
            return s === section;
        });
    };
});
