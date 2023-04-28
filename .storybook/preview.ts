import '@/style.css';
import './head';
import type { Preview } from '@storybook/vue';
import { setupTheme } from '../src';

setupTheme();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
