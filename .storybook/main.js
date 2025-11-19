import path from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';

const currentFilename = fileURLToPath(import.meta.url);
const currentDirname = path.dirname(currentFilename);

const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          '@': path.resolve(currentDirname, '../src'),
        },
      },
      optimizeDeps: {
        exclude: ['@storybook/*'],
      },
    });
  },
  managerHead: (head) => `
    ${head}
    <title>내 프로젝트 Storybook</title>
  `,
};
export default config;
