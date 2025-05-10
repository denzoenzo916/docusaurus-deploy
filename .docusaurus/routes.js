import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docusaurus-deploy/blog',
    component: ComponentCreator('/docusaurus-deploy/blog', '54c'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/archive',
    component: ComponentCreator('/docusaurus-deploy/blog/archive', '7e7'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/authors',
    component: ComponentCreator('/docusaurus-deploy/blog/authors', 'a96'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docusaurus-deploy/blog/authors/all-sebastien-lorber-articles', 'cf3'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/authors/yangshun',
    component: ComponentCreator('/docusaurus-deploy/blog/authors/yangshun', 'ca2'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/first-blog-post',
    component: ComponentCreator('/docusaurus-deploy/blog/first-blog-post', '947'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/long-blog-post',
    component: ComponentCreator('/docusaurus-deploy/blog/long-blog-post', '95c'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/mdx-blog-post',
    component: ComponentCreator('/docusaurus-deploy/blog/mdx-blog-post', 'e8b'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/tags',
    component: ComponentCreator('/docusaurus-deploy/blog/tags', '333'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/tags/docusaurus',
    component: ComponentCreator('/docusaurus-deploy/blog/tags/docusaurus', '3e7'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/tags/facebook',
    component: ComponentCreator('/docusaurus-deploy/blog/tags/facebook', 'be6'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/tags/hello',
    component: ComponentCreator('/docusaurus-deploy/blog/tags/hello', 'e1f'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/tags/hola',
    component: ComponentCreator('/docusaurus-deploy/blog/tags/hola', 'c7d'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/blog/welcome',
    component: ComponentCreator('/docusaurus-deploy/blog/welcome', 'fcd'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/markdown-page',
    component: ComponentCreator('/docusaurus-deploy/markdown-page', 'bd3'),
    exact: true
  },
  {
    path: '/docusaurus-deploy/docs',
    component: ComponentCreator('/docusaurus-deploy/docs', 'c01'),
    routes: [
      {
        path: '/docusaurus-deploy/docs',
        component: ComponentCreator('/docusaurus-deploy/docs', '41e'),
        routes: [
          {
            path: '/docusaurus-deploy/docs',
            component: ComponentCreator('/docusaurus-deploy/docs', 'e56'),
            routes: [
              {
                path: '/docusaurus-deploy/docs/category/tutorial---basics',
                component: ComponentCreator('/docusaurus-deploy/docs/category/tutorial---basics', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/category/tutorial---extras',
                component: ComponentCreator('/docusaurus-deploy/docs/category/tutorial---extras', '49c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/intro',
                component: ComponentCreator('/docusaurus-deploy/docs/intro', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/congratulations', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/create-a-blog-post', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/create-a-document', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/create-a-page', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/deploy-your-site', '08e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-basics/markdown-features', '68d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-extras/manage-docs-versions', '3af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docusaurus-deploy/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docusaurus-deploy/docs/tutorial-extras/translate-your-site', '016'),
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
    path: '/docusaurus-deploy/',
    component: ComponentCreator('/docusaurus-deploy/', '8ad'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
