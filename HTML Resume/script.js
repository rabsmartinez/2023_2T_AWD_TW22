document.getElementById('themeButton').addEventListener('click', toggleTheme);

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('class');
  let newTheme;

  switch (currentTheme) {
    case 'theme2':
      newTheme = 'theme3';
      break;
    case 'theme3':
      newTheme = 'theme4';
      break;
    case 'theme4':
      newTheme = 'dark-theme';
      break;
    case 'dark-theme':
      newTheme = 'theme2';
      break;
    default:
      newTheme = 'theme2';
  }

  body.setAttribute('class', newTheme);
}
