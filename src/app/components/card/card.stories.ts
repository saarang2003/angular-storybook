

import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<CardComponent> = {
  args: {
    imageSrc: 'https://mui.com/static/images/avatar/1.jpg',
    title: 'ASSET',
    subtitle: 'TalentSearch',
    description:
      'Ei ASSET Talent Search (ATS) is a talent identification assessment to discover the true academic potential of learners.',
  },
};
