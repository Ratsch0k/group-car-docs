// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Group Car',
  tagline: 'Manage your shared cars',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Ratsch0k', // Usually your GitHub org/user name.
  projectName: 'group-car-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Ratsch0k/group-car-docs/tree/main/',
        },
        /* Blog is not used for now
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Group Car',
        logo: {
          alt: 'My Group Car Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/Ratsch0k/group-car-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'My Group Car',
                href: 'https://my-group-car.de'
              },
              {
                label: 'Development Version',
                href: 'https://dev.my-group-car.de',
              },
              {
                label: 'Beta Version',
                href: 'https://dev.my-group-car.de',
              }
            ]
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Documentation',
                href: 'https://github.com/Ratsch0k/group-car-docs'
              },
              {
                label: 'Fronted',
                href: 'https://github.com/Ratsch0k/group-car'
              },
              {
                label: 'Backend',
                href: 'https://github.com/Ratsch0k/group-car-api'
              },
            ],
          },
          {
            title: 'About Me',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ratsch0k'
              },
              {
                label: 'Personal Website',
                href: 'https://simonkurz.de',
              },
              {
                label: 'Portfolio',
                href: 'https://ratsch0k.github.io'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simon Kurz, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
