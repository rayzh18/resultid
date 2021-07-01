import { getCurrentTheme, setCurrentTheme } from './helpers/Utils';

const color = getCurrentTheme();

const render = () => {
  import(`./assets/css/sass/main.${color}.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();
