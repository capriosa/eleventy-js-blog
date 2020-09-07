/**
 * @file Contains global data for the site colophon
 * Seven Eleven is based on the work by
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global colophon data module
 * @module _data/colophon
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
module.exports = {
  en: {
    generator: '<b>Seven Eleven</b> is based on the work created by <a href=\"https://twitter.com/reubenlillie\">@reubenlillie</a> with the static site generator <a href=\"https://11ty.dev/\">Eleventy, TailwindCSS and AlpineJS</a>.',
    languages: 'Source code written in vanilla JavaScript, semantic HTML, TailwindCSS and AlpineJS.',
    git: 'Contribute on eleventy-dot-js-blog <a href=\"http://gitlab.com/reubenlillie/eleventy-dot-js-blog/\">GitLab</a>.',
    host: 'Hosted on <a href=\"https://netlify.com/\">Netlify</a>.'
  }
}
