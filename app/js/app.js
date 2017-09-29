import {module as utils} from './utils';
import {module as buttons} from './buttons';

import '../less/style.less';

let app = angular.module('companyWebsite', ['ngAnimate',
    utils.name,
    buttons.name
]);

export {app};

