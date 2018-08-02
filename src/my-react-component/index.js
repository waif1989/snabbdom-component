import React from 'react';
import AddComponent from '../my-add-component';

class MyAddComponent extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.time = this.props.time
    }
    init () {
        const demoComponent = Object.create(AddComponent({name: 'MyAddComponent'})).initCom();
        return demoComponent.renderCom.call(this, demoComponent, React);
    }
    render () {
        // return <div>Hello {this.props.name}</div>;
        return this.init();
    }
}

export default MyAddComponent;