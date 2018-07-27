import Snabbdom from 'snabbdom-pragma';
import {init} from 'snabbdom';
import {default as classDefault} from 'snabbdom/modules/class';
import {default as propsDefault} from 'snabbdom/modules/props';
import {default as styleDefault} from 'snabbdom/modules/style';
import {default as eventListenersDefault} from 'snabbdom/modules/eventlisteners';
import toHTML from 'snabbdom-to-html';
import DemoComponent from '../my-snabb-component';
const patch = init([
    classDefault,
    propsDefault,
    styleDefault,
    eventListenersDefault
]);
// console.log('DemoComponent:', typeof DemoComponent, toHTML(DemoComponent()));
const rootData = {};
let num = 0;
Object.defineProperty(rootData, 'num', {
    get () {
        return num;
    },
    set (newValue) {
        num = newValue;
        update(num);
    },
    enumerable : true,
    configurable : true
});
document.getElementById('add').addEventListener('click', () => {
    rootData.num = rootData.num + 1;
});

let oldNode = document.getElementById('app');
let newNode = DemoComponent({
    name: 'My Snabbdom',
    type: 3,
    num: rootData.num
});
const update = (num) => {
    oldNode = newNode;
    newNode = DemoComponent({
        name: 'My Snabbdom',
        type: 3,
        num: num
    });
    oldNode = patch(oldNode, newNode);
    console.log('New Html String:---', toHTML(newNode));
};
patch(oldNode, newNode);
