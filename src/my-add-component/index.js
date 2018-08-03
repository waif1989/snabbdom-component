import {default as defaultH} from 'snabbdom/h';
import React from 'react';
import COMMON_COM from '../my-common-component';
import './index.less';
const ADD_COM_FN = ({
    name = 'AddComponent',
    frameWork = 'dom'
} = {}) => {
    const data_state = {
        num: 0
    };
    const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);
    ADD_COM.initCom = function () {
        this.init(data_state, frameWork);
        this.name = name;
        this.setPropsVal({
            name: {
                type: String,
                default: 'defaultPropName'
            },
            time: {
                type: Number,
                default: 1
            }
        });
        this.setComputedVal({
            numComputed: function () {
                return this.num * 2;
            }
        });
        this.setCreateWillMount(function () {
            console.log('Component Create:', this.num);
            this.num = this.num + 1;
        });
        this.setMountedDidMount(function () {
            console.log('Component Mounted:', this.num);
        });
        this.setMethods({
            add: function () {
                this.num = this.num + 1;
                this.$emit('addCb', this.num);
            },
            reduce: function () {
                this.num = this.num - 1;
            }
        });
        return this;
        // ADD_COM.init.call(this, data_state, frameWork);
        // ADD_COM.setPropsVal.call(this, {
        //     name: {
        //         type: String,
        //         default: 'defaultPropName'
        //     },
        //     time: {
        //         type: Number,
        //         default: 1
        //     }
        // }, frameWork);
        // ADD_COM.setComputedVal.call(this, {
        //     numComputed: function () {
        //         return this.num * 2;
        //     }
        // });
        // ADD_COM.setCreateWillMount.call(this, function () {
        //     console.log('Component Create:', this.num);
        //     this.num = this.num + 1;
        // });
        // ADD_COM.setMountedDidMount.call(this, function () {
        //     console.log('Component Mounted:', this.num);
        // });
        // ADD_COM.setMethods.call(this, {
        //     add: function () {
        //         this.num = this.num + 1;
        //         this.$emit('addCb', this.num);
        //     },
        //     reduce: function () {
        //         this.num = this.num - 1;
        //     }
        // });
        // return this;
    };
    ADD_COM.renderCom = function (ins = this, h = defaultH) {
        const JSX = (
            <div
                className="my-component-container"
                class="my-component-container"
            >
                <button
                    className={ins.getPropsVal.call(this, 'name')}
                    class={ins.getPropsVal.call(this, 'name')}
                    onClick={ins.invokeFn.call(this, 'add')}
                >
                    My Add Component '+' Btn
                </button>
                <button
                    onClick={ins.invokeFn.call(this, 'reduce')}
                >
                    My Add Component '-' Btn
                </button>
                <div class={{'text-red':ins.getDataStateVal.call(this, 'num') > 2}}>This Data Num: {ins.getDataStateVal.call(this, 'num')}</div>
                <div>This Computed Num: {ins.getComputedVal.call(this, 'numComputed')}</div>
                <div>This Prop Name: {ins.getPropsVal.call(this, 'name')}, This Prop Time: {ins.getPropsVal.call(this, 'time')}</div>
            </div>
        );
        return ins.render(JSX);
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;