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
        } else if (frameWork === 'react') {
            this.getInitialState = function () {
                return {
                    ...DEFAULT_DATA
                }
            }
        } else {}
        this.getDataStateVal = function (val) {
            if (frameWork === 'vue') {
                return this[val];
            } else if (frameWork === 'react') {
                return this.state[val];
            }
        };
        this.changeDataStateVal = function (target, newVal) {
            if (frameWork === 'vue') {
                this[target] = newVal;
            } else if (frameWork === 'react') {
                this.setState({
                    [target]: newVal
                });
            }
        }
        this.getPropsVal = function (val) {
            if (frameWork === 'vue') {
                return this[val];
            } else if (frameWork === 'react') {
                return this.props[val];
            }
        }
    },
    getComputedVal: function (val) {
        if (!this._reactInternalInstance) {
            return this[val];
        }
    },
    invokeFn: function (fnName) {
        if (!this._reactInternalInstance) {
            return this[fnName];
        } else {
            return this.methods[fnName].bind(this);
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