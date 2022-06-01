const setTheme = (theme: string) => {
  // * Stop transitions before changing the theme

  document.body.classList.add('d-remove-transition');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  let isThemeDark = media.matches;

  if (localStorage.dTheme) {
    isThemeDark = localStorage.dTheme == 'dark';
  }

  if (isThemeDark) {
    document.body.setAttribute('d-theme', 'dark');
  } else {
    document.body.removeAttribute('d-theme');
  }

  if (theme == 'dark') {
    document.body.setAttribute('d-theme', 'dark');
  } else if (theme == 'light') {
    document.body.removeAttribute('d-theme');
  }

  localStorage.dTheme = isThemeDark ? 'dark' : 'light';

  setTimeout(() => {
    document.body.classList.remove('d-remove-transition');
  }, 100)

  return isThemeDark ? 'dark' : 'light';
}

const toggleTheme = (theme: string) => {
  // * Stop transitions before changing the theme

  document.body.classList.add('d-remove-transition');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  let isThemeDark = media.matches;

  if (localStorage.dTheme) {
    isThemeDark = localStorage.dTheme == 'dark';
  }

  if (!isThemeDark) {
    document.body.setAttribute('d-theme', 'dark');
  } else {
    document.body.removeAttribute('d-theme');
  }

  if (theme == 'dark') {
    document.body.removeAttribute('d-theme');
  } else if (theme == 'light') {
    document.body.setAttribute('d-theme', 'dark');
  }

  localStorage.dTheme =  !isThemeDark ? 'dark' : 'light';

  setTimeout(() => {
    document.body.classList.remove('d-remove-transition');
  }, 100);

  return !isThemeDark ? 'dark' : 'light';
}

export {
  toggleTheme,
  setTheme
}
