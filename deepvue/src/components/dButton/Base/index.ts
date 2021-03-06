import component from './dButton.vue';
import './style.sass';

component.install = (vue: any) => {
  vue.component('d-btn', component);
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue);
}

export default component;
