import {default as defaultH} from 'snabbdom/h';
import React from 'react';
import COMMON_COM from '../my-common-component';
import './index.less';
const ADD_COM_FN = ({
    name = 'AddComponent',
    frameWork = 'dom'
} = {}) => {
    const data_state = {
        num: -1
    };
    const ADD_COM = Object.setPrototypeOf({}, COMMON_COM);
    ADD_COM.initCom = function () {
        this.init(data_state, frameWork);
        this.name = name;
        const getDataStateVal = this.getDataStateVal;
        const updateDataStateVal = this.updateDataStateVal;
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
            console.log('Component Create & ComponentWillMount:', getDataStateVal.call(this, 'num'));
            updateDataStateVal.call(this, 'num', (() => {
                let temp = getDataStateVal.call(this, 'num');
                return ++temp;
            })());
        });
        this.setMountedDidMount(function () {
            console.log('Component Mounted & ComponentDidMount:', getDataStateVal.call(this, 'num'));
        });
        this.setMethods({
            add: function () {
                updateDataStateVal.call(this, 'num', (() => {
                    let temp = getDataStateVal.call(this, 'num');
                    return ++temp;
                })());
                // this.num = this.num + 1;
                // this.$emit('addCb', this.num);
            },
            reduce: function () {
                updateDataStateVal.call(this, 'num', (() => {
                    let temp = getDataStateVal.call(this, 'num');
                    return --temp;
                })());
                // this.num = this.num - 1;
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
        const getPropsVal = ins.getPropsVal;
        const invokeFn = ins.invokeFn;
        const getDataStateVal = ins.getDataStateVal;
        const getComputedVal = ins.getComputedVal;
        const directives = [
            { name: 'className', value: 'text-red', modifiers: { num: true } }
        ];
        const JSX = (
            <div
                className="my-component-container"
                v-className="my-component-container"
            >
                <button
                    className={getPropsVal.call(this, 'name')}
                    //class={getPropsVal.call(this, 'name')}
                    onClick={invokeFn.call(this, 'add')}
                >
                    My Add Component '+' Btn
                </button>
                <button
                    onClick={invokeFn.call(this, 'reduce')}
                >
                    My Add Component '-' Btn
                </button>
                <div
                    className={getDataStateVal.call(this, 'num') > 2 ? 'text-red' : ''}
                    v-className={{'text-red':getDataStateVal.call(this, 'num') > 2}}
                >
                    This Data Num: {getDataStateVal.call(this, 'num')}
                </div>
                <div>This Computed Num: {getComputedVal.call(this, 'numComputed')}</div>
                <div>This Prop Name: {getPropsVal.call(this, 'name')}, This Prop Time: {getPropsVal.call(this, 'time')}</div>
            </div>
        );
        return ins.render(JSX);
    };
    return ADD_COM
};
module.exports = exports = ADD_COM_FN;
module.default = ADD_COM_FN;