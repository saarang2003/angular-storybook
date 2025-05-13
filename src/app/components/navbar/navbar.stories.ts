import { Meta, StoryFn  , StoryObj} from '@storybook/angular';
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
  },
  tags : ['autodocs']
} as Meta<NavbarComponent>;

const Template: StoryFn<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const Default : StoryObj<NavbarComponent> = {
  args : {
    title: 'EDUCATION INITIATIVE',
   imageSrc: 'https://ei.study/wp-content/uploads/2022/10/edilogo.png',
  }
}


export const LogoOnly : StoryObj<NavbarComponent> ={
  args : {
     title: '' ,
   imageSrc: 'https://ei.study/wp-content/uploads/2022/10/edilogo.png',
  }
}

