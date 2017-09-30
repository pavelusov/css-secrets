import {module as utils} from './utils';
import {module as buttons} from './buttons';
import {module as sections} from './sections';
import {module as modals} from './modals';

import '../less/style.less';

let app = angular.module('companyWebsite', ['ngAnimate',
    utils.name,
    buttons.name,
    sections.name,
    modals.name
]);

export {app};

