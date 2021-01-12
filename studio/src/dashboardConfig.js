export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffd798dce12e8eb95b6ce47',
                  title: 'Sanity Studio',
                  name: 'mirror-this-poem-studio-pg2ti7ys',
                  apiId: '2f844b2e-01e8-4939-a458-fea214837cb7'
                },
                {
                  buildHookId: '5ffd798d59dbe9e0de59ad04',
                  title: 'Blog Website',
                  name: 'mirror-this-poem-web-co9tok5n',
                  apiId: '1983d606-0ae1-43db-9d02-749e5723b568'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yorbenGoor123/mirror-this-poem',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mirror-this-poem-web-co9tok5n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
