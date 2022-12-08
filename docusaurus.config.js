/* eslint-disable @typescript-eslint/no-var-requires */
const math = require('remark-math')
const katex = require('rehype-katex')
require('dotenv').config()

module.exports = {
  customFields: {
    // Analytics proxy URL
    analyticsProxyUrl: process.env.REACT_APP_AMPLITUDE_PROXY_URL,
    // Determines if staging env
    stagingEnv: process.env.REACT_APP_STAGING,
    // From node
    nodeEnv: process.env.NODE_ENV,
  },
  title: 'Andex',
  tagline: 'Documentation and Guides',
  url: 'https://docs.andex.finance/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'andex-fi', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    image: 'img/logo.png',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '32465e2ab6f7554ff014e64c0d92171c',
      indexName: 'v3-docs',
      appId: 'S0IDD0YGLZ',
    },
    navbar: {
      title: 'Andex Docs',
      logo: {
        alt: 'Andex Logo',
        src: 'img/Subtract.png',
      },
      items: [
        {
          to: '/concepts/overview',
          label: 'Concepts',
          position: 'left',
          className: 'V3_active',
        },
        {
          to: '/contracts/overview',
          label: 'Contracts',
          position: 'left',
          className: 'V3_active',
        },
        {
          to: '/sdk/overview',
          label: 'SDKs',
          position: 'left',
          className: 'V3_active',
        },
        /* {
          to: '/api/subgraph/overview',
          label: 'APIs',
          position: 'left',
          className: 'V3_active',
        }, */
        {
          label: 'Give Feedback',
          to: 'https://forms.gle/6KzDM6G3448G94Sv8',
          position: 'right',
          className: 'persistent',
        },
        /* {
          label: 'Whitepaper',
          to: 'https://uniswap.org/whitepaper-v3.pdf',
          position: 'right',
          className: 'persistent',
        }, */
        {
          href: 'https://github.com/andex/docs',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
        /* {
          href: 'https://unigrants.org/',
          label: 'Grants',
          position: 'right',
          className: 'persistent',
        }, */
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'Feedback',
              href: 'https://forms.gle/6KzDM6G3448G94Sv8',
            },
            {
              label: 'Community',
              href: 'https://discord.gg/uNF2mqrnDU',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'Andex Core',
              href: 'https://github.com/andex-fi/andex-contracts',
            },
            {
              label: 'Andex SDK',
              href: 'https://github.com/andex-fi/andex-sdk',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Home',
              href: 'https://andex.finance/',
            },
            {
              label: 'DApp',
              href: 'https://app.andex.finance/',
            },
            /* {
              label: 'Analytics',
              href: 'https://info.andex.finance/home',
            }, */
            /* {
              label: 'Token Lists',
              href: 'https://tokenlists.org/',
            }, */
            /* {
              label: 'Brand Assets',
              href: 'https://uniswap.org/Uniswap_brand_assets.zip',
            }, */
          ],
        },
        {
          title: 'Community',
          items: [
            /* {
              label: 'Governance',
              href: 'https://gov.uniswap.org/',
            }, */
            {
              label: 'Discord',
              href: 'https://discord.gg/uNF2mqrnDU',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/andexfinance',
            },
            /* {
              label: 'Blog',
              href: 'https://uniswap.org/blog/',
            }, */
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'contracts',
          path: 'docs/contracts',
          routeBasePath: 'contracts/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/andex-fi/docs/tree/main/',
          includeCurrentVersion: true,
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          path: 'blog/',
          blogTitle: 'Engineering Blog',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'docs/sdk',
        routeBasePath: 'sdk',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'docs/api',
        routeBasePath: 'api/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'docs/concepts',
        routeBasePath: 'concepts/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // V3 Redirects
          if (existingPath.includes('/concepts/overview')) {
            return [existingPath.replace('/concepts/overview', '/protocol/introduction')]
          }
          if (existingPath.includes('/contracts/v3/reference')) {
            return [existingPath.replace('/contracts/v3/reference', '/protocol/reference')]
          }
          if (existingPath.includes('/contracts/v3/guides')) {
            return [existingPath.replace('/contracts/v3/guides', '/protocol/guides')]
          }
          // V2 Redirects
          if (existingPath.includes('/contracts/v2/reference')) {
            return [existingPath.replace('/contracts/v2/reference', '/protocol/V2/reference')]
          }
          if (existingPath.includes('/contracts/v2/guides')) {
            return [existingPath.replace('/contracts/v2/guides', '/protocol/V2/guides')]
          }
          // Permit2 Redirects
          if (existingPath.includes('/contracts/permit2')) {
            return [existingPath.replace('/contracts/permit2', '/protocol/permit2')]
          }
          // v3-sdk Redirects
          if (existingPath.includes('/sdk/v3/overview')) {
            return [existingPath.replace('/sdk/v3/overview', '/sdk/introduction')]
          }
          if (existingPath.includes('/sdk/v3/guides')) {
            return [existingPath.replace('/sdk/v3/guides', '/sdk/guides')]
          }
          // swap-widgets Redirects
          if (existingPath.includes('/sdk/swap-widget/overview')) {
            return [existingPath.replace('/sdk/swap-widget/overview', '/sdk/widgets/swap-widget')]
          }
          if (existingPath.includes('/sdk/swap-widget/reference/v2')) {
            return [existingPath.replace('/sdk/swap-widget/reference/v2', '/sdk/widgets/swap-widget/api')]
          }

          // Return a falsy value: no redirect created
          return undefined
        },
      },
    ],
  ],
}
