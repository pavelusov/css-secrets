import {module as utils} from './utils';
import {module as buttons} from './buttons';
import {module as sections} from './sections';

import '../less/style.less';

let app = angular.module('companyWebsite', ['ngAnimate',
    utils.name,
    buttons.name,
    sections.name
]);

export {app};

