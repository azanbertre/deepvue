import { setColor } from '../util';
import { checkAll, getLength, getPage, getPageLength, getSearch, sortData } from './dTable';
import { setTheme, toggleTheme } from './toggleTheme';

import loading from './dLoading/Base';
import notification from './dNotification/Base';

export default (Vue: any) => {
  Vue.prototype.$d = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body);
    },
    toggleTheme,
    setTheme,
    loading,
    notification,
    getPage,
    getPageLength,
    getLength,
    checkAll,
    getSearch,
    sortData
  }
}
