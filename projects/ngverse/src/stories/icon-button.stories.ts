import type { Meta, StoryObj } from '@storybook/angular';

import { ButtonStory } from './button-story';
import { IconButtonStory } from './icon-button-story';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonStory> = {
  title: 'Example/Icon Button',
  component: IconButtonStory,
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
    label: 'Icon Button',
  },
};
