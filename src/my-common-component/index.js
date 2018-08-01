const COMMON_COM = {
    init (DEFAULT_DATA) {
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
    },
    render (JSX) {
        return JSX
    }
};
module.exports = exports = COMMON_COM;
module.default = COMMON_COM;