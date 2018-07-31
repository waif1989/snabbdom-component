/*import {patch, toHTML} from '../snabbdom-engine';
import DemoComponent from '../my-snabb-component';
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
patch(oldNode, newNode);*/
import Vue from 'vue';
import MyComponent from '../my-component';
import {patch} from '../snabbdom-engine';
import SnabbComponent from '../my-snabb-component';
new Vue({
    el: '#vueApp',
    components: {
        MyComponent
    },
    data: {
    
    },
    methods: {
    
    }
});
/*let oldNode = document.getElementById('snabbApp');
let newNode = SnabbComponent({
    name: 'My Snabbdom',
    type: 3,
    num: 0
});
console.log('------', newNode);
patch(oldNode, newNode);*/
