import Snabbdom from 'snabbdom-pragma'; // Tell .babelrc use Snabbdom.createElement, And babel will tranform JSX into Snabbdom's 'h' function.
// import MyChildComponent from '../my-child-snabb-component';
import {toHTML} from '../snabbdom-engine';
import {default as _h} from 'snabbdom/h';
const EXPORT = ({
                    name = 'Hello World',
                    type = 1,
                    num = -1
                } = {}, h = _h, ctx) => {
    const JSX = (
        <div
            class={'title component1'}
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
            <button onClick={ctx.add}>Common Component '+' Btn</button>
        </div>
    );
    return JSX;
};
module.exports = exports = EXPORT;
module.default = EXPORT;