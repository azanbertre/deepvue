import dCol from './dCol.vue';
import dRow from './dRow.vue';

import './style.sass'

dCol.install = (vue: any) => {
  vue.component('d-col', dCol);
}

dRow.install = (vue: any) => {
  vue.component('d-row', dRow);
}

if (typeof window !== 'undefined' && window.Vue) {
  dCol.install(window.Vue);
  dRow.install(window.Vue);
}

export {
  dCol,
  dRow
}
