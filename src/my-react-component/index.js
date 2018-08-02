import React from 'react';
import AddComponent from '../my-add-component';

class MyAddComponent extends React.Component {
    constructor (props) {
        super(props);
    }
    init () {
        const demoComponent = Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'react'}));
        demoComponent.initCom.call(this);
        console.log('demoComponent:', demoComponent, this);
        return demoComponent.renderCom.call(this, demoComponent, React);
    }
    render () {
        // return <div>Hello {this.props.name}</div>;
        return this.init();
    }
}

/*class Test extends React.Component {
    render () {
        console.log('===', this);
        return <div>Hello {this.props.name}</div>;
    }
}
Test.prototype = Object.assign(Test.prototype, Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'react'})).initCom());
class MyAddComponent extends Test {
    constructor (props) {
        super(props);
        return new Test();
    }
}*/

export default MyAddComponent;