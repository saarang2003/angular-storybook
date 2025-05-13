

import { Meta, StoryFn } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  decorators: [
    (story) => ({
      template: `<div style="margin: 1rem;">${story().template}</div>`,
      props: story().props,
      moduleMetadata: {
        imports: [FormsModule],
      },
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
    tags : ['autodocs']
} as Meta;

const Template: StoryFn = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  label: 'Click on the box ',
  checked: false,
};

export const MultipleCheckboxes = () => ({
  template: `
    <ui-checkbox label="Apple" value="Apple" [selectedValues]="selectedValues"></ui-checkbox>
    <ui-checkbox label="Banana" value="Banana" [selectedValues]="selectedValues"></ui-checkbox>
    <ui-checkbox label="Mango" value="Mango" [selectedValues]="selectedValues"></ui-checkbox>
    <p>Click on the above boxes ⬆️</p>
  `,
  props: {
    selectedValues: [],
  },
});
