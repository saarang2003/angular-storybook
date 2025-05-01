

import { Meta, StoryFn } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/Toggle Switch',
  component: ToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [ToggleComponent],
    }),
  ],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
} as Meta<ToggleComponent>;

const Template: StoryFn<ToggleComponent> = (args) => ({
  props: args,
});

export const Off = Template.bind({});
Off.args = {
  label: 'Enable Notifications',
  checked: false,
};

export const On = Template.bind({});
On.args = {
  label: 'Enable Notifications',
  checked: true,
};
