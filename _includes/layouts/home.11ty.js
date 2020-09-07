/**
 * @file Defines the chained template for home page
 *  Seven Eleven is based on the work by
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
exports.data = {
  layout: 'layouts/base'
}

/**
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
exports.render = (data) => {
  var l10n = data.site[data.locale]
  var reversed = [...data.collections.posts.slice(-2)].reverse()
  return `<article>
    ${data.content}
    <h2 class="font-semibold text-3xl my-3">${l10n.postsArchive.headline}</h2>
    ${this.archive(data, reversed)}
    <p><a href="${l10n.postsArchive.url}">${l10n.postsArchive.prompt}</a></p>
  </article>`
}
