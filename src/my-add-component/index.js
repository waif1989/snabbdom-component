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
    const getDataStateVal = ADD_COM.getDataStateVal(frameWork);
    const updateDataStateVal = ADD_COM.updateDataStateVal(frameWork);
    const getPropsVal = ADD_COM.getPropsVal(frameWork);
    const getComputedVal = ADD_COM.getComputedVal(frameWork);
    const invokeFn = ADD_COM.invokeFn(frameWork);
    const setComputedVal = ADD_COM.setComputedVal(frameWork);
    const setPropsVal = ADD_COM.setPropsVal(frameWork);
    const setCreateWillMount = ADD_COM.setCreateWillMount(frameWork);
    const setMountedDidMount = ADD_COM.setMountedDidMount(frameWork);
    const setMethods = ADD_COM.setMethods(frameWork);
    ADD_COM.initCom = function () {
        this.init(data_state, frameWork);
        this.name = name;
        setPropsVal.call(this, {
            name: {
                type: String,
                default: 'defaultPropName'
            },
            time: {
                type: Number,
                default: 1
            }
        });
        setComputedVal.call(this, {
            numComputed: function () {
                if (frameWork === 'vue') {
                    return getDataStateVal.call(this, 'num') * 2;
                } else {
                    // debugger;
                    // return getDataStateVal.call(this, 'num') * 2;
                }
            }
        });
        setCreateWillMount.call(this, function () {
            console.log('Component Create & ComponentWillMount:', getDataStateVal.call(this, 'num'));
            updateDataStateVal.call(this, 'num', (() => {
                let temp = getDataStateVal.call(this, 'num');
                return ++temp;
            })());
        });
        setMountedDidMount.call(this, function () {
            console.log('Component Mounted & ComponentDidMount:', getDataStateVal.call(this, 'num'));
        });
        setMethods.call(this, {
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
    };
    ADD_COM.renderCom = function (ins = this, h = defaultH) {
        const JSX = (
            <div
                className="my-component-container"
                v-className="my-component-container"
            >
                <button
                    className={getPropsVal.call(this, 'name')}
                    v-className={getPropsVal.call(this, 'name')}
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