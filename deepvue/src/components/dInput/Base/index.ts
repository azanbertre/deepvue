import component from './dInput';
import './style.sass';

component.install = (vue: any) => {
  vue.component('d-input', component);
}

if (typeof window !== 'undefined' && window.Vue) {
  component.install(window.Vue);
}

export default component;
