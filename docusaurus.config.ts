import type * as Preset from '@docusaurus/preset-classic';
import { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: 'Front-end Tech Interview',
  tagline: 'Front-end Tech Interview / 프론트엔드 기술 아티클 정리',
  favicon: 'img/favicon.ico',
  url: 'https://saseungmin.github.io',
  baseUrl: '/frontend-tech-interview',
  organizationName: 'saseungmin',
  projectName: 'frontend-tech-interview',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/saseungmin/frontend-tech-interview/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Front-end Tech Interview',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Questions',
          },
          {
            href: 'https://github.com/saseungmin/frontend-tech-interview',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Questions',
                to: '/docs/article',
              },
            ],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/saseungmin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} saseungmin. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        defaultLanguage: 'typescript',
        additionalLanguages: ['typescript', 'java', 'scala'],
      },
    } satisfies Preset.ThemeConfig,
};

export default config;
