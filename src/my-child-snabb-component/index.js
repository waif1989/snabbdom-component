import Snabbdom from 'snabbdom-pragma'; // Tell .babelrc use Snabbdom.createElement, And babel will tranform JSX into Snabbdom's 'h' function.
const EXPORT = ({
                    name = 'My Child'
                } = {}) => {
    return (
        <div
            className="child-title component2"
        >
            <p>{name} Component</p>
        </div>
    );
};
module.exports = exports = EXPORT;
module.default = EXPORT;