import { defineConfig } from 'dumi';

const repo = 'dumi';

export default defineConfig({
  title: '隧三网站导航页',
  mode: 'site',
  devServer: {
    port: 1145,
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

  // more config: https://d.umijs.org/config
});
