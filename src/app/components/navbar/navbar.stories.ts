import { Meta, StoryFn } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the navbar',
      defaultValue: 'EDUCATION INITIATIVE'
    }
  }
} as Meta<NavbarComponent>;

const Template: StoryFn<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: 'EDUCATION INITIATIVE'
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  title: 'EDUCATION INITIATIVE - Empowering Students Worldwide'
};

export const ShortTitle = Template.bind({});
ShortTitle.args = {
  title: 'EI'
};
