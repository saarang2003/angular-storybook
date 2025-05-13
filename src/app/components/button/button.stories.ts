import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  tags : ['autodocs']
} as Meta;

const Template: StoryFn<ButtonComponent> = (args) => ({
  props: {
    ...args,
    action: action('button-clicked'),
  },
  moduleMetadata: {
    imports: [CommonModule],
  },
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  variant: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  variant: 'danger',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};
