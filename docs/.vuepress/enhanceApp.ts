import { EnhanceApp } from 'vuepress-types';
import DeepVue from '../../deepvue/src/index';
import 'boxicons/css/boxicons.min.css'

const enhanceApp: EnhanceApp = ({ Vue }) => {
  Vue.use(DeepVue);
  Vue.prototype.$user = Vue.observable({
    user: null
  })
}

export default enhanceApp;
