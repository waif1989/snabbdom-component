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
            const demo = Object.create(AddComponent({
	            num: 10
            }));
            demo.comInit();
            demo.setProp({ // This will set props property of component
	            name: 'mySetPropName',
                time: 30
            });
            demo.methods.add = function () { // This add function will replace component default add function
                this.num = this.num + 10;
            };
            resolve({
	            ...demo,
                render (h) {
                    demo.setThis(this);
                    console.log('------', demo);
                    return demo.comRender(h);
                }
            });
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