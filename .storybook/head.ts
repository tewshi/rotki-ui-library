import { createHead, HeadVuePlugin } from '@vueuse/head';
import Vue from 'vue';

const head = createHead();
Vue.use(HeadVuePlugin, head);
Vue.config.productionTip = false;
new Vue({ template: '<span />' }).$mount();
