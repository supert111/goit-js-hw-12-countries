const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const bodyRef = document.querySelector('body');
  let themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
  
  themeSwitchToggleRef.addEventListener('change', themesChange);
//Функция добавления, удаления класса(light-theme или dark-theme) на элемент body
  function themesChange () {  
    if (themeSwitchToggleRef.checked !== true) {
      bodyRef.classList.remove(Theme.DARK); 
      bodyRef.classList.add(Theme.LIGHT);
      themeSwitchToggleRef.removeEventListener;
      themeSaved (Theme.LIGHT);
    }
    else {
      bodyRef.classList.remove(Theme.LIGHT); 
      bodyRef.classList.add(Theme.DARK);
      themeSwitchToggleRef.removeEventListener;
      themeSaved (Theme.DARK);
    }
  };
//Функция сохраняет тему которую выбрал user в localStorage
  function themeSaved (event) {
    localStorage.setItem('ThemeOn', JSON.stringify(event));
  };
//localStorage
  const savedTheme = localStorage.getItem('ThemeOn');
  if(savedTheme) {
    const parsedSettings = JSON.parse(savedTheme);
    bodyRef.setAttribute('class', parsedSettings);
    if(parsedSettings === Theme.DARK) {
      themeSwitchToggleRef.checked = true;
    }
  }

  
  