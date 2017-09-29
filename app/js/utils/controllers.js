import {module} from "./module";

module.controller('contentMainController', ($scope, $http, $timeout) => {
    $scope.showTitle = false;
    $timeout(() => {
        $scope.showTitle = true;
    }, 500);
    $scope.$on('getContent', (event,content) => {
        if (content) {
            const url = `/data/${content}.html`;

            $http.get(url).then(res => {
                $scope.$broadcast('sectionContent', res.data);
            })
        }

    });
});
