import { useHead } from '@vueuse/head';
import { get } from '@vueuse/core';
import { type ThemeConfig, useTheme } from '@/composables/theme';

export const setupTheme = (config?: ThemeConfig) => {
  const themeConfig = useTheme(config);

  const { theme } = themeConfig;

  useHead(
    {
      style: [
        {
          key: 'rui-ui-root',
          textContent: () => `
        :root {
          --rui-primary-light: ${get(theme).primaryLight};
          --rui-primary: ${get(theme).primary};
          --rui-primary-dark: ${get(theme).primaryDark};
          --rui-secondary-light: ${get(theme).secondaryLight};
          --rui-secondary: ${get(theme).secondary};
          --rui-secondary-dark: ${get(theme).secondaryDark};
          --rui-error-light: ${get(theme).errorLight};
          --rui-error: ${get(theme).error};
          --rui-error-dark: ${get(theme).errorDark};
        }
      `
        }
      ]
    },
    { mode: 'client' }
  );

  return themeConfig;
};
