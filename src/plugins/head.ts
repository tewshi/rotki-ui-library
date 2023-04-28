import { HeadVuePlugin, createHead } from '@vueuse/head';
import Vue from 'vue';

const head = createHead();
Vue.use(HeadVuePlugin, head);
new Vue({ template: '<span />' }).$mount();
