import { Meta, StoryObj } from '@storybook/angular';
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
  tags: ['autodocs'],
} as Meta<ToggleComponent>;

export const Off: StoryObj<ToggleComponent> = {
  args: {
    label: 'Enable Notifications',
    checked: false,
  },
};

export const On: StoryObj<ToggleComponent> = {
  args: {
    label: 'Enable Notifications',
    checked: true,
  },
};
