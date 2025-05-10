import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
   "staticDirs": ['../src/app/assets'],
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  }
};
export default config;