import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
const link = document.createElement('link');
link.href =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@0;1';
link.rel = 'stylesheet';
document.head.appendChild(link);
