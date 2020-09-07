/**
 * @file Defines a shortcode for displaying an archive of content
 *  Seven Eleven is based on the work by
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a `section` of `article`s
 * @module _includes/shortcodes/archive
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>

  /**
   * A section of articles
   * @method
   * @name archive
   * @param {Object} data 11ty’s data object
   * @param {Array} arr The 11ty content objects to list
   * @return {String} The rendered shortcode
   * @example `${this.archive(data, data.pagination.items)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('archive', (data, arr) => {
    var l10n = data.site[data.locale]
    return `<section>
    ${arr.map(item =>
      `<article>
        <time>${this.pageDate(item.data)}</time>
        <h2 class="font-semibold">
          <a href="${item.data.page.url}">${item.data.title}</a>
        </h2>
        <p>${item.data.description}</p>
      </article>`).join('')}
    </section>`
  })
