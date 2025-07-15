import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonStory } from './button-story';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonStory> = {
  title: 'Example/Button',
  component: ButtonStory,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      defaultValue: {
        summary: 'primary',
      },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'none'],
      defaultValue: {
        summary: 'md',
      },
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonStory>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};
