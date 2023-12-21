/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        slug: '/getting-started'
      },
      items: [
        'quickstart',
        'starter-projects',
        'rules',
        'customizations',
        'faq'
      ],
      collapsed: false
    }, {
      type: 'category',
      label: 'Maps',
      link: {
        type: 'generated-index',
        slug: '/maps'
      },
      items: [{
        type: 'autogenerated',
        dirName: 'maps'
      }],
    }, {
      type: 'category',
      label: 'Leaderboards',
      items: [{
        type: 'autogenerated',
        dirName: 'leaderboards'
      }],
    }, {
      type: 'category',
      label: 'Tournaments',
      items: [{
        type: 'autogenerated',
        dirName: 'tournaments'
      }],
    }, {
      type: 'category',
      label: 'Developer Tips',
      items: [{
        type: 'autogenerated',
        dirName: 'tips'
      }],
      collapsed: false
    }, {
      type: 'category',
      label: 'Policies',
      items: [{
        type: 'autogenerated',
        dirName: 'policies'
      }]
    }
  ],
  api: [{
    type: 'autogenerated',
    dirName: 'api',
  }]
};

module.exports = sidebars;
