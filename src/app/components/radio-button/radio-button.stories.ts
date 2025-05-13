

import { Meta, StoryFn } from '@storybook/angular';
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

const Template: StoryFn<RadioButtonComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Select a color',
  options: ['Red', 'Green', 'Blue'],
  selected: '',
};

export const WithSelected = Template.bind({});
WithSelected.args = {
  label: 'Choose a language',
  options: ['JavaScript', 'Python', 'Go'],
  selected: 'Python',
};
