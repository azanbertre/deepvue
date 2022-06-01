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
    const style = window.getComputedStyle(document.body);
    newColor = style.getPropertyValue(`--d-${color}`);

    if (isHEX(newColor.trim())) {
      const rgb = hexToRgb(newColor.trim());
      newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
    }
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
}
