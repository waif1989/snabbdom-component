import {default as defaultH} from 'snabbdom/h';
import COMMON_COM from '../my-common-component';
const ADD_COM_FN = ({
    num = 0
} = {}) => {
    const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);
    const OPTIONS = {
        num: num
    };
    ADD_COM.comInit = function ({} = OPTIONS) {
        this.init(OPTIONS);
        this.methods.add = function () {
            this.ctx.num = this.ctx.num + 1;
        }.bind(this);
        this.props = {
            name: {
                type: String,
                default: 'defaultPropName'
            },
            time: {
                type: Number,
                default: 1
            }
        };
        return this;
    };
    ADD_COM.setThis = function (ctx) {
        this.ctx = ctx;
    };
    ADD_COM.setProp = function (option) {
        this.props.name.default = option.name;
        this.props.time.default = option.time;
    };
    ADD_COM.comRender = function (h = defaultH) {
        const JSX = (
            <div>
                <button
                    onClick={(this.ctx && this.ctx.add) || this.methods.add}
                    className={this.ctx.name}
                    class={this.ctx.name}
                >
                    My Add Component '+' Btn
                </button>
                <div>{this.ctx.num}</div>
                <div>This Prop Name: {this.ctx.name}, This Prop Time: {this.ctx.time}</div>
            </div>
        );
        return this.render(JSX);
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;