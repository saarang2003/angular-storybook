import { Meta, StoryFn } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Navbar',
  component: NavbarComponent,
  imports: [CommonModule],
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
  title: 'EDUCATION INITIATIVE',
   imageSrc: 'src/app/assets/logo.png',
};

export const LogoOnly = Template.bind({});
LogoOnly.args = {
  title: '' ,
   imageSrc: 'src/app/assets/logo.png',
};

