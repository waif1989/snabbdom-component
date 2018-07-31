import {default as defaultH} from 'snabbdom/h';
import COMMON_COM from '../my-common-component';
const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);

const ADD_COM_FN = (_h, {
    num = 0
} = {}) => {
    const h = _h || defaultH;
    const OPTIONS = {
        num: num
    };
    const JSX = (
        <div>
            <button>My Add Component '+' Btn</button>
            <div>{num}</div>
        </div>
    );
    
    ADD_COM.addInit = function ({} = JSX, {} = OPTIONS) {
        this.init(JSX, OPTIONS);
        return this;
    };
    ADD_COM.data = function data () {
        this.data();
    };
    ADD_COM.addRender = function () {
        return this.render();
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;