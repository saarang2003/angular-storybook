

import { Meta, StoryFn , StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/Radio Group',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [RadioButtonComponent],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    selected: { control: 'text' },
  },
    tags : ['autodocs']
} as Meta<RadioButtonComponent>;


export const Default : StoryObj<RadioButtonComponent> ={
  args : {
     label: 'Select a color',
  options: ['Red', 'Green', 'Blue'],
  selected: '',
  }
}

export const WithSelected : StoryObj<RadioButtonComponent> ={
  args : {
    label: 'Choose a language',
  options: ['JavaScript', 'Python', 'Go'],
  selected: 'Python',
  }
}
