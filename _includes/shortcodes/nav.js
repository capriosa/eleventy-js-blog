/**
 * @file Defines a menucode for displaying a navigation menu
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a navigation menu
 * @module _includes/shortcodes/grid-nav
 * @param {Object} eleventyConfig 11ty’s Config API
 */
module.exports = eleventyConfig =>

  /**
   * Navigation markup
   * @method
   * @name nav
   * @param {Array} collection 11ty collection to map over
   * @param {Object} page The current 11ty `page` object
   * @param {String|Array} classes CSS classes for the `nav` (optional)
   * @param {String} ariaLabel The WAI-ARIA `aria-label` to attach to the `nav` (optional)
   * @return {String} The rendered shortcode
   * @example `${this.nav(data.collections.policies, data.page)}`
   * @see {@link https://www.11ty.dev/docs/collections/ Collections in 11ty}
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   * @see {@link https://www.w3.org/TR/wai-aria/#aria-label WAI-ARIA specification for `aria-label` property}
   */
  eleventyConfig.addShortcode('nav', (collection, page, classes, ariaLabel) => {
    var classList = []
    if (classes !== undefined) {
      if (typeof classes === 'string') {
        classList.push(classes)
      }
      if (Array.isArray(classes)) {
        classList = [...classes]
      }
    }
    return typeof collection !== 'undefined' && collection.length > 0
      ? `<nav
          ${classes ? `class="${classList.map(item => `${item}`).join(' ')}"` : ''}
          ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}>
        ${collection
        .sort((a, b) => a.data.weight - b.data.weight)
        .map(item => `<a href="${item.data.url ? item.data.url : item.url}"
            ${page.url === item.url ? 'aria-current="page"' : ''}>${item.data.navTitle
            ? item.data.navTitle
            : item.data.title
          }</a>`
        ).join('\n')}
      <div class="ml-8 mt-2" x-data="{ isOpen: false }">
      <button
          @click="isOpen = !isOpen"
          class="flex items-center cursor-pointer"
          @keydown.escape="isOpen = false"
      >
          <img src="https://www.gravatar.com/avatar?d=mm" alt="avatar" class="w-8 h-8 rounded-full">

      </button>
      <ul
          x-show="isOpen"
          @click.away="isOpen = false"
          class="absolute font-normal bg-white shadow overflow-hidden rounded w-48 border mt-8 right-0 z-20"
          x-transition:enter="transition transform origin-top-right ease-out duration-200"
          x-transition:enter-start="opacity-0 scale-75"
          x-transition:enter-end="opacity-100 scale-100"
          x-transition:leave="transition transform origin-top-right ease-out duration-200"
          x-transition:leave-start="opacity-100 scale-100"
          x-transition:leave-end="opacity-0 scale-75"
      >
          <li>
              <a href="/admin" class="flex items-center px-3 py-3 hover:bg-gray-200">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-gray-600"><path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" class="heroicon-ui"></path></svg>
                  <span class="ml-2">NetlifyCMS</span>
              </a>
          </li>
          <li class="border-b border-gray-400">
              <a href="https://app.netlify.com" class="flex items-center px-3 py-3 hover:bg-gray-200">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-gray-600"><path d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="heroicon-ui"></path></svg>
                  <span class="ml-2">Netlify app</span>
              </a>
          </li>

      </ul>
  </div>
        </nav>`
      : ''
  })
