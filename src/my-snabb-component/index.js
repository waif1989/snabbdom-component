import Snabbdom from 'snabbdom-pragma'; // Tell .babelrc use Snabbdom.createElement, And babel will tranform JSX into Snabbdom's 'h' function.
import MyChildComponent from '../my-child-snabb-component';
const EXPORT = ({
                    name = 'Hello World',
                    type = 1
                } = {}) => {
    return (
        <div
            className="title component1"
        >
            <p>{name} Component</p>
            {type === 1 ? (
                <p>type1</p>
            ) : (
                <p>type other</p>
            )}
            {MyChildComponent({
                name: 'My Custom Child'
            })}
        </div>
    );
};
module.exports = exports = EXPORT;
module.default = EXPORT;