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
import React from 'react';
import ReactDOM from 'react-dom';
import AddComponent from '../my-add-component';
import MyComponent from '../my-component';
import {patch} from '../snabbdom-engine';
import SnabbComponent from '../my-snabb-component';


/*new Vue({
    el: '#vueApp',
    components: {
        MyComponent
    },
    data: {
    
    },
    methods: {
    
    }
});*/

class MyAddComponent extends React.Component {
    init () {
        const demoComponent = Object.create(AddComponent({name: 'MyAddComponent'})).initCom();
        return demoComponent.renderCom.call(this, demoComponent, React);
    }
    render () {
        // return <div>Hello {this.props.name}</div>;
        return this.init();
    }
}
ReactDOM.render(
    <MyAddComponent
        name="'mySetPropName'"
        time="30" />,
    document.getElementById('reactApp')
);


/*let oldNode = document.getElementById('snabbApp');
let newNode = SnabbComponent({
    name: 'My Snabbdom',
    type: 3,
    num: 0
});
console.log('------', newNode);
patch(oldNode, newNode);*/
