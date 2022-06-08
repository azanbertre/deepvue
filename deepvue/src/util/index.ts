const mergeClass = (classList: any, classNames: any) => {
  const isClassListEmpty = !classList || !Array.isArray(classList) || !classList.length;
  const isClassNamesEmpty = !classNames || classNames.constructor != String || !classNames.trim().length;

  if (isClassListEmpty && isClassNamesEmpty) {
    return [];
  }

  if (isClassListEmpty && !isClassNamesEmpty) {
    return classNames.split(' ').map((el: string) => el.trim());
  }

  if (!isClassListEmpty && isClassNamesEmpty) {
    return classList;
  }

  return mergeLists(classList, classNames.split(' ').map((el: string) => el.trim()));
}

const mergeLists = (list1: any, list2: any) => {
  const isList1Empty = !list1 || !Array.isArray(list1) || !list1.length;
  const isList2Empty = !list2 || !Array.isArray(list1) || !list2.length;

  if (isList1Empty && isList2Empty) {
    return [];
  }

  if (!isList1Empty && isList2Empty) {
    return list1;
  }

  if (isList1Empty && !isList2Empty) {
    return list2;
  }

  return list1.concat(list2);
}

const mergeDicts = (dict1: any, dict2: any) => {
  const isDict1Empty = !dict1 || dict1.constructor != Object || !Object.keys(dict1).length;
  const isDict2Empty = !dict2 || dict2.constructor != Object || !Object.keys(dict2).length;

  if (isDict1Empty && isDict2Empty) {
    return [];
  }

  if (!isDict1Empty && isDict2Empty) {
    return dict1;
  }

  if (isDict1Empty && !isDict2Empty) {
    return dict2;
  }

  return Object.assign({}, dict1, dict2);
}

const isColor = (color: string) => {
  const dColors = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light',

    // * Colors for social media
    'facebook', 'twitter', 'youtube', 'pinterest',
    'linkedin', 'snapchat', 'whatsapp', 'tumblr',
    'reddit', 'spotify', 'amazon', 'medium', 'vimeo', 'skype',
    'dribbble', 'slack', 'yahoo', 'twitch', 'discord', 'telegram',
    'google-plus', 'messenger'
  ]
  return dColors.includes(color)
}

const setStyleVar = (name: string, value: string, el: any) => {
  if (el) {
    el.style.setProperty(`--d-${name}`, value);
    return;
  }

  document.documentElement.style.setProperty(`--d-${name}`, value);
}

const setColor = (name: string, color: string, el: any, addClass?: boolean) => {
  if (color == 'dark' && el) {
    el.classList.add('d-component-dark');
    return;
  }

  const newColor = getColor(color);

  if (!newColor) {
    return;
  }

  setStyleVar(name, newColor, el);

  if (addClass) {
    el.classList.add('d-change-color');
  }
}

const getColor = (color: string) => {
  let newColor;

  if (isRGB(color)) {
    const rgb = color.replace(/[rgba()]/g, '').split(',');
    newColor = `${rgb[0]},${rgb[1]},${rgb[2]}`;
  } else if (isHEX(color)) {
    const rgb = hexToRgb(color);
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
  } else if (isColor(color)) {
    newColor = `var(--d-${color})`;
  } else {
    newColor = null;
  }

  return newColor;
}

const insertBody = (element: HTMLElement, parent: any) => {
  const target = parent ? parent : document.body
  target.insertBefore(element, target.lastChild)
}

const removeBody = (element: HTMLElement, parent: any) => {
  const target = parent ? parent : document.body
  target.removeChild(element)
}

function isRGB(color: string) {
  // for rgba -> 0,0,0,1
  // ((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),
  // (0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d))(,((0.[\d]|0)|1))?

  const nCheck = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color)
  const rgbCheck = /^(rgb|rgba)/.test(color);

  return nCheck || rgbCheck;
}

function isHEX(color: string) {
  return /^(#)/.test(color);
}

function hexToRgb(hex: string) {
  let regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  // short hex
  if (hex.length < 6) {
    regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  }

  const result = regex.exec(hex);

  // handle short hex result
  if (hex.length < 6 && result) {
    result[1] = result[1] + result[1];
    result[2] = result[2] + result[2];
    result[3] = result[3] + result[3];
  }

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export {
  setColor,
  getColor,
  setStyleVar,
  isColor,
  insertBody,
  removeBody,
  mergeLists,
  mergeDicts,
  mergeClass
}
