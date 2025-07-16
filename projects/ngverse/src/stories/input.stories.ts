import type { Meta, StoryObj } from '@storybook/angular';

import { InputDirective } from '@/ui/input/input.directive';
import { InputStory } from './input-story';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputStory> = {
  title: 'Example/Input',
  component: InputDirective,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InputDirective>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `<input appInput [disabled]="disabled" [readonly]="readonly" id="input" />`,
  }),
};
