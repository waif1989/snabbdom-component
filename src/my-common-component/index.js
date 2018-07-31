const COMMON_COM = {
    init (OPTIONS) {
        this.data = function () {
            return {
                ...OPTIONS
            }
        };
        this.methods = {}
    },
    render (JSX) {
        return JSX
    }
};
module.exports = exports = COMMON_COM;
module.default = COMMON_COM;