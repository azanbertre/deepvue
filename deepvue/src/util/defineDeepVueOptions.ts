import { setTheme } from '../functions/toggleTheme';
import { setColor } from './index';

export interface DeepVueOptions {
  colors?: DeepVueColors,
  theme?: string
}

export interface DeepVueColors {
  primary: string
  success: string
  danger: string
  warning: string
  dark: string
  [item: string]: any
}

const defineColors = (colors: DeepVueColors) => {
  if (!document.body) { return; }

  Object.keys(colors).forEach((el) => {
    setColor(el, colors[el], document.body);
  })
}

export const defineDeepVueOptions = (options: DeepVueOptions) => {
  if (!!options.colors) {
    defineColors(options.colors)
  }

  if (!!options.theme) {
    setTheme(options.theme);
  }
}
