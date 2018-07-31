import {default as defaultH} from 'snabbdom/h';
import COMMON_COM from '../my-common-component';
const ADD_COM_FN = ({
    num = 0
} = {}) => {
    const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);
    const OPTIONS = {
        num: num
    };
    ADD_COM.addInit = function ({} = OPTIONS) {
        this.init(OPTIONS);
        return this;
    };
    ADD_COM.addRender = function (vnodeFn = defaultH) {
        const JSX = require('./ui')(num, vnodeFn);
        return this.render(JSX);
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;