import {init} from 'snabbdom';
import {default as classDefault} from 'snabbdom/modules/class';
import {default as propsDefault} from 'snabbdom/modules/props';
import {default as styleDefault} from 'snabbdom/modules/style';
import {default as eventListenersDefault} from 'snabbdom/modules/eventlisteners';
import toHTML from 'snabbdom-to-html';
const patch = init([
    classDefault,
    propsDefault,
    styleDefault,
    eventListenersDefault
]);
const EXPORT = {
    patch,
    toHTML
};
module.exports = exports = EXPORT;
module.default = EXPORT;