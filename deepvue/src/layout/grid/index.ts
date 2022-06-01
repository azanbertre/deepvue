import './style.sass'

import dCol from './DCol';
import dRow from './DRow';

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
