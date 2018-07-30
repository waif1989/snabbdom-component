// import Snabbdom from 'snabbdom-pragma'; // Tell .babelrc use Snabbdom.createElement, And babel will tranform JSX into Snabbdom's 'h' function.
// import MyChildComponent from '../my-child-snabb-component';
import {toHTML} from '../snabbdom-engine';
const EXPORT = ({
                    name = 'Hello World',
                    type = 1,
                    num = -1
                } = {}, h) => {
    let Snabbdom = null;
    if (!h) {
        Snabbdom = require('snabbdom-pragma');
    }
    const JSX = (
        <div
            className="title component1"
        >
            <p>Num: {num}</p>
            <p>{name} Component</p>
            {/*{MyChildComponent({
                name: 'My Custom Child'
            })}*/}
            {type === 1 ? (
                <p>type1</p>
            ) : (
                <p>type other</p>
            )}
        </div>
    );
    return JSX;
};
module.exports = exports = EXPORT;
module.default = EXPORT;