const COMMON_COM = {
    init: function (DEFAULT_DATA, frameWork) {
        this.name = 'CommonComponent';
        this.frameWork = frameWork;
        if (frameWork === 'vue') {
            this.props = {};
            this.components = {};
            this.data = function () {
                return {
                    ...DEFAULT_DATA
                }
            };
            this.watch = {};
            this.computed = {};
            this.beforeCreate = function () {};
            this.created = function () {};
            this.beforeMount = function () {};
            this.mounted = function () {};
            this.beforeDestroy = function () {};
            this.destroyed = function () {};
            this.methods = {};
            this.directives = {
                className: {
                    inserted: function (el, binding) {
                        if (typeof binding.value === 'object') {
                            var temp = '';
                            for (var i in binding.value) {
                                if (binding.value[i]) {
                                    temp = temp + i;
                                }
                            }
                            el.setAttribute('class', temp);
                        } else if (typeof binding.value === 'string') {
                            el.setAttribute('class', binding.value);
                        }
                    },
                    update: function (el, binding) {
                        if (typeof binding.value === 'object') {
                            var temp = '';
                            for (var i in binding.value) {
                                if (binding.value[i]) {
                                    temp = temp + i;
                                }
                            }
                            el.setAttribute('class', temp);
                        } else if (typeof binding.value === 'string') {
                            el.setAttribute('class', binding.value);
                        }
                    }
                }
            }
        } else if (frameWork === 'react') {
            this.getInitialState = function () {
                return {
                    ...DEFAULT_DATA
                }
            }
        } else {}
    },
    getDataStateVal: function (frameWork) {
        return function (val) {
            if (frameWork === 'vue') {
                return this[val];
            } else if (frameWork === 'react') {
                return this.state[val];
            }
        }
    },
    updateDataStateVal: function (frameWork) {
        return function (target, newVal) {
            if (frameWork === 'vue') {
                this[target] = newVal;
            } else if (frameWork === 'react') {
                this.setState({
                    [target]: newVal
                });
            }
        }
    },
    getPropsVal: function (frameWork) {
        return function (val) {
            if (frameWork === 'vue') {
                return this[val];
            } else if (frameWork === 'react') {
                return this.props[val];
            }
        }
    },
    getComputedVal: function (frameWork) {
        return function (val) {
            if (frameWork === 'vue') {
                return this[val];
            }
        }
    },
    invokeFn: function (frameWork) {
        return function (fnName) {
            if (frameWork === 'vue') {
                return this[fnName];
            } else if (frameWork === 'react') {
                return this.methods[fnName].bind(this);
            }
        }
    },
    setPropsVal: function (props) {
        if (this.frameWork === 'vue') {
            this.props = props;
        } else if (this.frameWork === 'react') {
            const temp = {};
            for (const i in props) {
                if (typeof props[i] === 'object' && typeof props[i]['default'] !== 'undefined') {
                    temp[i] = props[i]['default'];
                } else if (typeof props[i] === 'object' && Array.isArray(props[i])) {
                    temp[i] = props[i];
                } else if (typeof props[i] !== 'object' && typeof props[i] !== 'undefined') {
                    temp[i] = props[i];
                }
            }
            this.getDefaultProps = function () {
                return {
                    ...temp
                }
            }
        }
    },
    setComputedVal: function (computed) {
        this.computed = computed;
    },
    setCreateWillMount: function (fn) {
        if (this.frameWork === 'vue') {
            this.created = fn;
        } else if (this.frameWork === 'react') {
            this.componentWillMount = fn;
        }
    },
    setMountedDidMount: function (fn) {
        if (this.frameWork === 'vue') {
            this.mounted = fn
        } else if (this.frameWork === 'react') {
            this.componentDidMount = fn;
        }
    },
    setMethods: function (methods) {
        this.methods = methods;
    },
    render: function (JSX) {
        return JSX
    }
};
module.exports = exports = COMMON_COM;
module.default = COMMON_COM;