

import { Meta, StoryObj } from '@storybook/angular';
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



export const Default : StoryObj<TextareaComponent> = {
  args : {
  label: 'Comment',
  placeholder: 'Write your comment here...',
  value: '',
  rows: 4
  }
};


export const WithError : StoryObj<TextareaComponent>= {
  args : {
  label: 'Message',
  placeholder: 'Enter your message...',
  value: '',
  error: 'Message cannot be empty',
  rows: 5 
  }
}

