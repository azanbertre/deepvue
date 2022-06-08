import * as dComponents from './components/index';
import defineDeepVueFunctions from './functions/defineDeepVueFunctions';
import * as dLayouts from './layout/index';
import './styles/deepvue.sass';
import { DeepVueOptions, defineDeepVueOptions } from './util/defineDeepVueOptions';

const install = (Vue: any, options?: DeepVueOptions) => {
  // * Set Components
  Object.values(dComponents).forEach((dComponent) => {
    Vue.use(dComponent);
  })

  // * Set Layouts
  Object.values(dLayouts).forEach((dLayout) => {
    Vue.use(dLayout);
  })

  if (options) {
    defineDeepVueOptions(options);
  }

  defineDeepVueFunctions(Vue);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// * Export default install
export default install;
