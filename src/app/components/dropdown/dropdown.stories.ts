

import { Meta, StoryFn } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const meta: Meta = {
    title: 'Components/Dropdown',
    component: DropdownComponent,
    argTypes: {
      label: { control: 'text' },
      placeholder: { control: 'text' },
      selected: { control: 'text' },
      options: {
        control: { type: 'object' },
      },
    },
  };
  
  export default meta;

const Template: StoryFn = (args) => ({
  component: DropdownComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Choose a fruit',
  options: ['Apple', 'Banana', 'Mango', 'Grapes'],
  selected: '',
  placeholder: 'Select a fruit',
};

export const WithSelected = Template.bind({});
WithSelected.args = {
  label: 'Choose a language',
  options: ['JavaScript', 'TypeScript', 'Python'],
  selected: 'TypeScript',
  placeholder: 'Select a language',
};
