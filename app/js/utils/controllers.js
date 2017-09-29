import {module} from './module';
import {Section} from './classes'

module.controller('contentMainController', ($scope, $http, $timeout) => {
    $scope.showTitle = false;
    $timeout(() => {
        $scope.showTitle = true;
    }, 500);
    $scope.$on('getContent', (event, data) => {
        if (data) {
            const url = '/section/';
            $http.get(url, {
                params: {
                    id: data.content
                }
            }).then(res => {
                const section = new Section({
                    id: data.content,
                    title: data.title,
                    html: res.data
                });

                $scope.$broadcast('sectionContent', section);
            })
        }
    });
});
