import {
  defaultTheme,
  themeModeStorageKey,
} from '../constants/defaultValues';

export const getCurrentTheme = () => {
  let currentColor = defaultTheme;
  try {
    if (localStorage.getItem(themeModeStorageKey)) {
      currentColor = localStorage.getItem(themeModeStorageKey);
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : getCurrentColor -> error", error)
    currentColor = defaultTheme;
  }
  return currentColor;
};

export const setCurrentTheme = (color) => {
  try {
    localStorage.setItem(themeModeStorageKey, color);
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentColor -> error", error)
  }
};