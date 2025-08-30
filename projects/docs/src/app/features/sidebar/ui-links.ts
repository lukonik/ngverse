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
    {
      name: 'Tab Nav Bar',
      url: 'tab-nav-bar',
    },
    {
      name: 'Button',
      url: 'button',
    },
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
    {
      name: 'Context Menu',
      url: 'context-menu',
    },
    {
      name: 'Pagination',
      url: 'pagination',
    },
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
    {
      name: 'Font Icon',
      url: 'font-icon',
    },

    {
      name: 'Icon',
      url: 'icon',
    },
  ].sort((a, b) => a.name.localeCompare(b.name)),
};
