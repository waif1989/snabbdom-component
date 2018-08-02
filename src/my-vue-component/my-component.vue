<template>
	<div>
		<div>My vue component</div>
		<div>Vue Num:&nbsp;{{vueNum}}</div>
		<button @click="add">Vue VDOM '+' Btn</button>
		<div>-------My-Common-Addcomponent In Vue Component↓--------</div>
		<my-snabb-component
			:name="'myVuePropName'"
			:time="30"
			@addCb="addCbFn"
		></my-snabb-component>
	</div>
</template>

<script>
import DemoComponent from '../my-snabb-component';
import AddComponent from '../my-add-component';
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
        /*'my-snabb-component': {
            data () {
                return {
                    testNum: 10
                };
            },
	        created () {
                this.testNum = 20;
	        },
	        mounted () {
                this.testNum = 30;
	        },
	        methods: {
                add () {
                    this.testNum++;
                    console.log('this.testNum', this.testNum);
                }
	        },
            render (h) {
                const snabbDom = DemoComponent({
                    name: 'My Snabbdom',
                    type: 3,
                    num: this.testNum
                }, h, this);
                console.log('------', snabbDom);
                return snabbDom
            }
        }*/
        'my-snabb-component': (resolve) => {
            const demoComponent = Object.create(AddComponent({name: 'MyAddComponent', frameWork: 'vue'})).initCom(); // Auto Init component
            console.log('demoComponent:', demoComponent);
            resolve({
	            ...demoComponent,
                render (h) { // If data are changed in component that component will render again
                    return demoComponent.renderCom.call(this, demoComponent, h);
                }
            });
        }
	},
	methods: {
        add () {
            this.vueNum = this.vueNum + 1;
        },
        addCbFn (val) {
            console.log('addCbFn:', val);
        }
	}
}
</script>

<style scoped>

</style>