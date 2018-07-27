import Snabbdom from 'snabbdom-pragma';
import {init} from 'snabbdom';
import {default as classDefault} from 'snabbdom/modules/class';
import {default as propsDefault} from 'snabbdom/modules/props';
import {default as styleDefault} from 'snabbdom/modules/style';
import {default as eventListenersDefault} from 'snabbdom/modules/eventlisteners';
import DemoComponent from '../my-snabb-component';
const patch = init([
    classDefault,
    propsDefault,
    styleDefault,
    eventListenersDefault
]);
patch(document.getElementById('app'), DemoComponent);

