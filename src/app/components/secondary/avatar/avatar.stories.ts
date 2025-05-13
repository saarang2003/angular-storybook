import { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Components/Secondary/Avatar',
  component: AvatarComponent,
  decorators: [
    (story) => ({
      imports: [CommonModule, AvatarComponent],
      ...story(),
    }),
  ],
  tags :['autodocs']
} as Meta<AvatarComponent>;

export const Default: StoryObj<AvatarComponent> = {
  args: {
    imageSrc: 'https://mui.com/static/images/avatar/1.jpg',
  },
};
