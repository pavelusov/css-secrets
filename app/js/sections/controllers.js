import {module} from './module';

module.controller('sectionsController', ($scope, $element) => {
    $scope.testsectionsController = 'Sections Controllers';
    $scope.sectionTitle = 'rrot';
    let leftColumn = $element[0].querySelector('.leftColumnSection'),
        rightColumn = $element[0].querySelector('.rightColumnSection');

    $scope.$on('sectionContent', (event, content) => {

        if (angular.isElement(leftColumn)) {
            leftColumn.innerHTML = content;
            rightColumn.innerHTML = `<pre>${leftColumn.getElementsByTagName('style')[0].innerHTML}</pre>`;
        }
    });
});
