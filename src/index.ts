import { default as Button } from '@/components/buttons/Button.vue';

export { Button };

const plugin = {
  install(Vue: any) {
    Vue.component('RotkiButton', Button);
  }
};

export default plugin;
