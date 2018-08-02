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
    setPropsVal: function (props) {
        if (!this._reactInternalInstance) {
            this.props = props;
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