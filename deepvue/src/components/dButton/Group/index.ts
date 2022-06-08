import component from './dButtonGroup.vue';
import './style.sass';

component.install = (vue: any) => {
  vue.component('d-btn-group', component);
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue);
}

export default component;
