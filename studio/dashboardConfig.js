export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '63284c9a444b390f714e88bc',
                  title: 'Sanity Studio',
                  name: 'nextjs-sanity-studio-afmvtur1',
                  apiId: '825f07a7-73d0-4266-a780-d6f0ac00024f'
                },
                {
                  buildHookId: '63284c9ae3c94108f1c54885',
                  title: 'Landing pages Website',
                  name: 'nextjs-sanity-web-qp94k3xv',
                  apiId: '11198a0a-3ecc-4017-906d-5961511f9109'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samuelwondimu/nextjs-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://nextjs-sanity-web-qp94k3xv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
