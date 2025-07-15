import { SidebarGroup } from './sidebar-types';

export const UI_LINKS: SidebarGroup = {
  name: 'UI',
  statics: [
    {
      name: 'Schematics',
      url: 'schematics',
    },
    {
      name: 'Theming',
      url: 'theming',
    },
  ],
  children: [
    {
      name: 'Form',
      children: [
        {
          name: 'Input',
          url: 'input',
        },
        {
          name: 'Form Field',
          url: 'form-field',
        },
        {
          name: 'Multi Select',
          url: 'multi-select',
        },
        {
          name: 'OTP Input',
          url: 'otp-input',
        },
        {
          name: 'Select',
          url: 'select',
        },
        {
          name: 'Checkbox',
          url: 'checkbox',
        },
        {
          name: 'Radio Button',
          url: 'radio-button',
        },
        {
          name: 'Textarea',
          url: 'textarea',
        },
        {
          name: 'Switch',
          url: 'switch',
        },
      ],
    },
    {
      name: 'Panel',
      children: [
        {
          name: 'Accordion',
          url: 'accordion',
        },
        {
          name: 'Alert',
          url: 'alert',
        },
        {
          name: 'Card',
          url: 'card',
        },
        {
          name: 'Tab',
          url: 'tab',
        },
      ],
    },

    {
      name: 'Button',
      children: [
        {
          name: 'Button',
          url: 'button',
        },
        {
          name: 'Icon Button',
          url: 'icon-button',
        },
      ],
    },
    {
      name: 'Overlay',
      children: [
        {
          name: 'Dialog',
          url: 'dialog',
        },
        {
          name: 'Drawer',
          url: 'drawer',
        },
        {
          name: 'Popover',
          url: 'popover',
        },
        {
          name: 'Toast',
          url: 'toast',
        },
        {
          name: 'Tooltip',
          url: 'tooltip',
        },
      ],
    },
    {
      name: 'Menu',
      children: [
        {
          name: 'Context Menu',
          url: 'context-menu',
        },
      ],
    },
    {
      name: 'Data',
      children: [
        {
          name: 'Pagination',
          url: 'pagination',
        },
      ],
    },
    {
      name: 'Misc',
      children: [
        {
          name: 'Dark Mode',
          url: 'dark-mode',
        },
        {
          name: 'Divider',
          url: 'divider',
        },
        {
          name: 'Loader',
          url: 'loader',
        },

        {
          name: 'Progress Bar',
          url: 'progress-bar',
        },
        {
          name: 'Skeleton',
          url: 'skeleton',
        },
        {
          name: 'Badge',
          url: 'badge',
        },
      ],
    },
    {
      name: 'Icon',
      children: [
        {
          name: 'Font Icon',
          url: 'font-icon',
        },

        {
          name: 'Icon',
          url: 'icon',
        },
      ],
    },
  ],
};
