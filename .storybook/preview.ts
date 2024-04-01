import type { Preview } from '@storybook/react';
import i18n from '../src/i18n';

const preview: Preview = {
  globals: {
    locale: 'en',
    locales: {
      en_US: 'English (US)',
    },
  },

  parameters: {
    i18n,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
