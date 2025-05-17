import { Meta, StoryFn, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger' , 'outline'],
    },
    width : {
      control : 'text',
      description : 'change the width as you want  '
    } ,
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
} as Meta;


export const Primary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
  render: (args) => ({
    props: {
      ...args,
      action: action('button clicked'),
    },
  }),
};

export const Secondary: StoryObj<ButtonComponent> = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
  render: (args) => ({
    props: {
      ...args,
      action: action('button clicked'),
    },
  }),
};

export const DynamicWidthButton: StoryObj<ButtonComponent> = {
  args: {
    label: 'DynamicWidthButton',
    variant: 'primary',
    width : '30px'
  },
  render: (args) => ({
    props: {
      ...args,
      action: action('button clicked'),
    },
  }),
};

export const Danger: StoryObj<ButtonComponent> = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
  render: (args) => ({
    props: {
      ...args,
      action: action('button clicked'),
    },
  }),
};

export const Outline: StoryObj<ButtonComponent> = {
  args : {
    label : 'Outline',
    variant : 'outline',
  },
  render: (args) => ({
    props: {
      ...args,
      action: action('button clicked'),
    },
  }),
}

export const Loading: StoryObj<ButtonComponent> = {
  args: {
    label: 'Loading',
    loading: true,
  },
};

export const Disabled: StoryObj<ButtonComponent> = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};
