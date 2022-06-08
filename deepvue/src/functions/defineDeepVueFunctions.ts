import { setColor } from '../util';
import { checkAll, getLength, getPage, getPageLength, getSearch, sortData } from './dTable';
import { setTheme, toggleTheme } from './toggleTheme';

export default (Vue: any) => {
  Vue.provide('$d', {
    setColor(color: string, val: string) {
      setColor(color, val, document.body);
    },
    toggleTheme,
    setTheme,
    getPage,
    getPageLength,
    getLength,
    checkAll,
    getSearch,
    sortData
  })
}
