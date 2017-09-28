import {module as buttons} from './buttons';

import '../less/style.less';

let app = angular.module('companyWebsite', [buttons.name]);

export {app};
