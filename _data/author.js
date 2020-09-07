/**
 * @file Contains global data about the site author
 * Seven Eleven is based on the work by
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global author data module
 * @module _data/author
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
module.exports = {
  name: {
    fullName: 'Meinolf Droste',
    givenName: 'Meinolf',
    surname: 'Droste'
  },
  social: {
    // Add or remove accounts for social media platforms
    accounts: [
      {
        name: 'GitHub',
        url: 'https://github.com/capriosa/'
      },
      {
        name: 'GitLab',
        url: 'https://gitlab.com/reubenlillie/'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/reuben.lillie/'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/mdwp-meinolf-droste/'
      },
      {
        name: 'Messenger',
        url: 'https://m.me/reubenlillie/'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/mdwp/'
      }
    ]
  }
}
