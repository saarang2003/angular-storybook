

import { Meta, StoryFn } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

export default {
  title: 'Components/Textarea',
  component: TextareaComponent,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    rows: { control: 'number' }
  },
    tags : ['autodocs']
} as Meta;

const Template: StoryFn = (args) => ({
  component: TextareaComponent,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  label: 'Comment',
  placeholder: 'Write your comment here...',
  value: '',
  rows: 4
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Message',
  placeholder: 'Enter your message...',
  value: '',
  error: 'Message cannot be empty',
  rows: 5
};
