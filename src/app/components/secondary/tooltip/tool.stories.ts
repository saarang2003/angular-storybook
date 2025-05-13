import { Meta , StoryObj } from "@storybook/angular";
import { TooltipComponent } from "./tooltip.component";

const meta : Meta<TooltipComponent> ={
    title : 'Components/Secondary/Tooltip',
    component : TooltipComponent,
    tags : ['autodocs']
};

export default meta;

export const Default: StoryObj<TooltipComponent> = {
  render: (args) => ({
    component: TooltipComponent,
    props: args,
    template: `<app-tooltip [title]="title"><img src="https://mui.com/static/images/avatar/1.jpg" width="40" /></app-tooltip>`
  }),
  args: {
    title: 'Avatar'
  }
}
