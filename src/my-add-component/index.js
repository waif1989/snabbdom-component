import {default as defaultH} from 'snabbdom/h';
import COMMON_COM from '../my-common-component';
const ADD_COM_FN = ({
    name = 'AddComponent'
                    } = {}) => {
    const data = {
        num: 0
    };
    const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);
    ADD_COM.initCom = function () {
        this.init(data);
        this.name = name;
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
        this.computed = {
            numComputed: function () {
                return this.num * 2;
            }
        };
        this.created = function () {
            console.log('Component Create:', this.num);
            this.num = this.num + 1;
        };
        this.mounted = function () {
            console.log('Component Mounted:', this.num);
        };
        this.methods = {
            add: function () {
                this.num = this.num + 1;
                this.$emit('addCb', this.num);
            }
        };
        return this;
    };
    ADD_COM.setThis = function (ctx) {
        this.ctx = ctx;
    };
    ADD_COM.renderCom = function (ins = this, h = defaultH) {
        const JSX = (
            <div>
                <button
                    onClick={this.add}
                    className={this.name}
                    class={this.name}
                >
                    My Add Component '+' Btn
                </button>
                <div>This Data Num: {this.num}</div>
                <div>This Computed Num: {this.numComputed}</div>
                <div>This Prop Name: {this.name}, This Prop Time: {this.time}</div>
            </div>
        );
        return ins.render(JSX);
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;