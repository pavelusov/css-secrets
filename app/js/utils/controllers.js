import {module} from "./module";
class Section {
    constructor ({id, title, html}) {
        this.id = id;
        this.title = title;
        this.html = html;
    }
    get rules () {
        let node = document.createElement('pre'),
            rules;
        node.innerHTML = this.html;
        rules = `<pre>${node.getElementsByTagName('style')[0].innerHTML}</pre>`;
        return rules;
    }
}

module.controller('contentMainController', ($scope, $http, $timeout) => {
    $scope.showTitle = false;
    $timeout(() => {
        $scope.showTitle = true;
    }, 500);
    $scope.$on('getContent', (event, data) => {

        if (data) {
            const url = `/data/${data.content}.html`;

            $http.get(url).then(res => {
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
