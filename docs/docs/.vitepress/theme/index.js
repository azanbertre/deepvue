import Theme from 'vitepress/theme';
import DeepVue from 'deepvue';

import 'deepvue/dist/deepvue.min.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(DeepVue);
  }
}
