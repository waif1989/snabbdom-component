<template>
	<div>
		<div>My vue component</div>
		<div>Vue Num:&nbsp;{{vueNum}}</div>
		<button @click="add">Vue VDOM '+' Btn</button>
		<div>-------Snabb-component In Vue Component↓--------</div>
		<my-snabb-component></my-snabb-component>
	</div>
</template>

<script>
import DemoComponent from '../my-snabb-component';
export default {
    name: 'MyComponent',
	data () {
        return {
            vueNum: 0
        };
	},
	components: {
        /*'my-snabb-component': (resolve) => {
            const snabbDom =  DemoComponent({
                name: 'My Snabbdom',
                type: 3,
                num: 1
            });
            resolve(
                {
                    template: snabbDom
                }
            );
        }*/
        /*'my-snabb-component': {
            render (createElement) {
                const snabbDom = DemoComponent({
                    name: 'My Snabbdom',
                    type: 3,
                    num: 1
                }, 'vue');
                console.log('-----', snabbDom);
                return createElement(snabbDom.sel, snabbDom.data.props, snabbDom.children);
            }
        }*/
        'my-snabb-component': {
            render (h) {
                const snabbDom = DemoComponent({
                    name: 'My Snabbdom',
                    type: 3,
                    num: 1
                }, h);
                return snabbDom
            }
        }
	},
	methods: {
        add () {
            this.vueNum = this.vueNum + 1;
        }
	}
}
</script>

<style scoped>

</style>