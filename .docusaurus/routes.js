import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-deploy/docs/blog',
    component: ComponentCreator('/docusaurus-deploy/docs/blog', '72b'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/archive',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/archive', '4c2'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/authors',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/authors', 'f18'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/authors/all-sebastien-lorber-articles', 'c7b'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/authors/yangshun', '827'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/first-blog-post', '87e'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/long-blog-post', 'bd5'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/mdx-blog-post', '091'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/tags',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/tags', '072'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/tags/docusaurus', 'df9'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/tags/facebook', '8b9'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/tags/hello',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/tags/hello', '26e'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/tags/hola',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/tags/hola', '2e6'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/blog/welcome',
    component: ComponentCreator('/docusaurus-deploy/docs/blog/welcome', 'df1'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/markdown-page',
    component: ComponentCreator('/docusaurus-deploy/docs/markdown-page', 'c7d'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs/docs',
    component: ComponentCreator('/docusaurus-deploy/docs/docs', '56e'),
    routes: [
      {
        path: '/docusaurus-deploy/docs/docs',
        component: ComponentCreator('/docusaurus-deploy/docs/docs', 'b0a'),
        routes: [
          {
            path: '/docusaurus-deploy/docs/docs',
            component: ComponentCreator('/docusaurus-deploy/docs/docs', '428'),
            routes: [
              {
                path: '/docusaurus-deploy/docs/docs/category/tutorial---basics',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/category/tutorial---basics', '08e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/category/tutorial---extras',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/category/tutorial---extras', 'd2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/intro',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/intro', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/congratulations', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/create-a-blog-post', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/create-a-document', 'b13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/create-a-page', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/deploy-your-site', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-basics/markdown-features', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-extras/manage-docs-versions', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus-deploy/docs/docs/tutorial-extras/translate-your-site', 'cb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docusaurus-deploy/docs/',
    component: ComponentCreator('/docusaurus-deploy/docs/', 'bcb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
