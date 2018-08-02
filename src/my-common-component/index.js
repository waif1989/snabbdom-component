const COMMON_COM = {
    init: function (DEFAULT_DATA, frameWork) {
        if (frameWork === 'vue') {
            this.name = 'CommonComponent';
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
            this.state = {
                ...DEFAULT_DATA
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
    setPropsVal: function (props) {
        if (!this._reactInternalInstance) {
            this.props = props;
        }
    },
    setComputedVal: function (computed) {
        this.computed = computed;
    },
    setCreateWillMount: function (fn) {
        if (!this._reactInternalInstance) {
            this.created = fn;
        } else {
            this.componentWillMount = fn;
        }
    },
    setMountedDidMount: function (fn) {
        if (!this._reactInternalInstance) {
            this.mounted = fn
        } else {
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