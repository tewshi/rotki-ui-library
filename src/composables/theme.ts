import { get, set } from '@vueuse/core';
import { computed, reactive, ref } from 'vue-demi';

export const enum ThemeMode {
  auto,
  light,
  dark
}

export const enum ThemeController {
  system,
  app
}

export interface ThemeData {
  primaryLight: string;
  primary: string;
  primaryDark: string;
  secondaryLight: string;
  secondary: string;
  secondaryDark: string;
  errorLight: string;
  error: string;
  errorDark: string;
}

export interface ThemeConfig {
  light: ThemeData;
  dark: ThemeData;
}

export const useTheme = () => {
  const controller = ref(ThemeController.system);
  const themeMode = ref(ThemeMode.auto);
  const config = reactive<ThemeConfig>({
    light: {
      primaryLight: '176 107 87',
      primary: '126 74 59',
      primaryDark: '99 58 46',
      secondaryLight: '66 165 245',
      secondary: '25 118 210',
      secondaryDark: '21 101 192',
      errorLight: '239 83 80',
      error: '211 47 47',
      errorDark: '198 40 40'
    },
    dark: {
      primaryLight: '226 201 194',
      primary: '208 166 154',
      primaryDark: '189 131 114',
      secondaryLight: '227 242 253',
      secondary: '144 202 249',
      secondaryDark: '66, 165, 245',
      errorLight: '229 115 115',
      error: '244 67 54',
      errorDark: '211 47 47'
    }
  });

  const isAutoControlled = computed(
    () => get(controller) === ThemeController.system
  );
  const isLight = computed(() => get(themeMode) === ThemeMode.light);
  const isDark = computed(() => get(themeMode) === ThemeMode.dark);

  const theme = computed(() => {
    if (get(isLight)) {
      return config.light;
    }

    return config.dark;
  });

  const switchThemeMode = (mode: ThemeMode) => {
    set(themeMode, mode);
  };

  const toggleThemeMode = (light: boolean = get(isLight)) => {
    switchThemeMode(light ? ThemeMode.dark : ThemeMode.light);
  };

  const autoDark = useDark({
    onChanged: darkMode => {
      if (get(isAutoControlled)) {
        switchThemeMode(darkMode ? ThemeMode.dark : ThemeMode.light);
      }
    }
  });

  const switchController = (ctrl: ThemeController) => {
    set(controller, ctrl);
    if (get(isAutoControlled)) {
      toggleThemeMode(get(autoDark));
    }
  };

  const setAutoController = () => {
    switchController(ThemeController.system);
  };

  const toggleAutoController = () => {
    switchController(
      get(isAutoControlled) ? ThemeController.app : ThemeController.system
    );
  };

  return {
    themeMode,
    isDark,
    isLight,
    theme,
    config,
    switchThemeMode,
    toggleThemeMode,
    switchController,
    setAutoController,
    toggleAutoController
  };
};
