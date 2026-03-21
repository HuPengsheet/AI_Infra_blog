import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Infra Notes',
  tagline: '面向 LLM Serving、向量检索、推理平台与可观测性的个人笔记网站',
  favicon: 'img/logo.svg',
  future: {
    v4: true,
  },
  url: 'https://your-domain.example.com',
  baseUrl: '/',
  organizationName: 'yourname',
  projectName: 'ai-infra-notes',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'notes',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/ai-infra-social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'AI Infra Notes',
      logo: {
        alt: 'AI Infra Notes Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: '笔记',
        },
        {
          href: 'https://github.com/yourname',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://x.com/yourname',
          label: 'X',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '站点',
          items: [
            {
              label: '首页',
              to: '/',
            },
            {
              label: '笔记入口',
              to: '/notes/intro',
            },
          ],
        },
        {
          title: '指南',
          items: [
            {
              label: '开发文档',
              to: '/notes/guides/development',
            },
            {
              label: '部署文档',
              to: '/notes/guides/deployment',
            },
          ],
        },
        {
          title: '媒体账号',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yourname',
            },
            {
              label: 'X',
              href: 'https://x.com/yourname',
            },
            {
              label: 'Email',
              href: 'mailto:you@example.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Infra Notes.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
