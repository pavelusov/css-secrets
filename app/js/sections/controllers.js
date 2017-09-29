import {module} from './module';

module.controller('sectionsController', ($scope, $element) => {
    let leftColumn = $element[0].querySelector('.leftColumnSection'),
        rightColumn = $element[0].querySelector('.rightColumnSection');

    $scope.sections = ['intro'];
    $scope.sectionTitle = ' ';

    $scope.$on('sectionContent', (event, section) => {

        if (angular.isElement(leftColumn) && angular.isElement(rightColumn)) {
            $scope.sectionTitle = section.title;
            leftColumn.innerHTML = section.html;
            rightColumn.innerHTML = section.rules;
            $scope.sections.pop();
            $scope.sections.push('section');
        }
    });
    $scope.checkShowSection = (section) => {
        return $scope.sections.some(s => {
            return s === section;
        });
    };
});
