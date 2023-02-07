import { defineConfig } from 'vuepress/config';
import { resolve } from 'path';
import { nav_en, nav_zh } from './configs/nav';
import { sidebar_en, sidebar_zh } from './configs/sidebar';

export default defineConfig({
  port: 5175,
  base: '/smart-storage/docs/',
  title: 'Smart Storage',
  description: 'Smarter storage management',
  plugins: ['@vuepress/plugin-back-to-top'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/global.css' }],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Smart Storage',
      description: 'Smarter storage management',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Smart Storage',
      description: '更“聪明”的WebStorage管理',
    },
  },
  theme: 'vt',
  themeConfig: {
    docsDir: 'docs',
    repo: 'northwang-lucky/smart-storage',
    docsBranch: 'main',
    editLinks: true,
    lastUpdated: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        selectText: 'Languages',
        label: 'English',
        nav: nav_en,
        sidebar: sidebar_en,
      },
      '/zh/': {
        editLinkText: '在GitHub上编辑此页',
        selectText: '选择语言',
        label: '简体中文',
        nav: nav_zh,
        sidebar: sidebar_zh,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@imgs': resolve(__dirname, '../imgs'),
      },
    },
  },
});
