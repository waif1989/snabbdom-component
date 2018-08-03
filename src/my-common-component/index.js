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
            /*this.state = {
                ...DEFAULT_DATA
            }*/
            this.getInitialState = function () {
                return {
                    ...DEFAULT_DATA
                }
            }
        } else {}
    },
    getPropsVal: function (val) {
        if (!this._reactInternalInstance) {
            return this[val];
        } else {
            return this.props[val];
        }
    },
    getDataStateVal: function (val) {
        if (!this._reactInternalInstance) {
            return this[val];
        } else {
            return this.state[val];
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
    setPropsVal: function (props, frameWork) {
        if (this.frameWork === 'vue') {
            this.props = props;
        } else if (this.frameWork === 'react') {
            this.getDefaultProps = function () {
                return {
                    ...props
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