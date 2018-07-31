const COMMON_COM = {
    init (JSX, OPTIONS) {
        this.JSX = JSX;
        this.OPTIONS = OPTIONS;
    },
    data () {
        return {
            ...this.OPTIONS
        };
    },
    render () {
        return this.JSX
    }
};
module.exports = exports = COMMON_COM;
module.default = COMMON_COM;