import type { StorybookConfig } from '@storybook/nextjs';
import path from "path";
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  /** 
   * https://storybook.js.org/docs/get-started/nextjs#custom-webpack-config
   * Iconography를 위해 svgr 사용 */
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    /** @ alias 사용 */
    if (config.resolve) {
      config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    }


    return config;
  },

};
export default config;
