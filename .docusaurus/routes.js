import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '829'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '40a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a68'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e64'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd7d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '68d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ef6'),
    exact: true
  },
  {
    path: '/contributors',
    component: ComponentCreator('/contributors', 'b8b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9b4'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'ff7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '91b'),
    routes: [
      {
        path: '/docs/category/overview',
        component: ComponentCreator('/docs/category/overview', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/cli',
        component: ComponentCreator('/docs/cli', 'ab7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/deployment',
        component: ComponentCreator('/docs/deployment', 'e96'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', 'cf6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/application',
        component: ComponentCreator('/docs/overview/application', 'c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/cache',
        component: ComponentCreator('/docs/overview/cache', '5fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/dependencies',
        component: ComponentCreator('/docs/overview/dependencies', '86f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/error-handling',
        component: ComponentCreator('/docs/overview/error-handling', '8fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/features',
        component: ComponentCreator('/docs/overview/features', 'e74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/first-step',
        component: ComponentCreator('/docs/overview/first-step', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/mail',
        component: ComponentCreator('/docs/overview/mail', '303'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/opinionated-project-template',
        component: ComponentCreator('/docs/overview/opinionated-project-template', '281'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/repositories',
        component: ComponentCreator('/docs/overview/repositories', '6a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/overview/test',
        component: ComponentCreator('/docs/overview/test', 'e36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap', 'fb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
