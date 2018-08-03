import React from 'react';
import createReactClass from 'create-react-class';
import AddComponent from '../my-add-component';

/*class MyAddComponent extends React.Component {
    constructor (props) {
        super(props);
        this.demo = Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'react'}));
    }
    componentWillMount () {
        this.demo.initCom.call(this);
    }
    componentDidMount () {}
    init () {
        const demoComponent = Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'react'}));
        demoComponent.initCom.call(this);
        console.log('demoComponent:', demoComponent, this);
        return demoComponent.renderCom.call(this, demoComponent, React);
    }
    render () {
        // return <div>Hello {this.props.name}</div>;
        // return this.init();
        return this.demo.renderCom.call(this, this.demo, React);
    }
}*/
const instance = Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'react'})).initCom();
console.log('instance-----', instance);
const demoComponent = {
    ...instance,
    render: function () {
        return instance.renderCom.call(this, instance, React);
    }
};
const MyAddComponent = createReactClass(demoComponent);

export default MyAddComponent;