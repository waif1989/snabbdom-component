// import Vue from 'vue';
// import MyComponent from '../my-component';
// new Vue({
// 	el: '#app',
// 	components: {
//         MyComponent
// 	},
// 	data: {}
// });
import {init} from 'snabbdom';
import {default as classDefault} from 'snabbdom/modules/class';
import {default as propsDefault} from 'snabbdom/modules/props';
import {default as styleDefault} from 'snabbdom/modules/style';
import {default as eventListenersDefault} from 'snabbdom/modules/eventlisteners';
// import buble from 'buble';
// const buble = require('buble');
import Snabbdom from 'snabbdom-pragma';
const patch = init([
    classDefault,
    propsDefault,
    styleDefault,
    eventListenersDefault
]);
const vnode = <div>Hello World</div>;
patch(document.getElementById('app'), vnode);
/*
buble.transform(vnode, {
    jsx: 'Snabbdom.createElement'
});*/
