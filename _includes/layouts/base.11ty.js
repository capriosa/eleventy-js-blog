/**
 * @file Defines the base template
 * Seven Eleven is based on the work by
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#function JavaScript functions as templates in 11ty}
 */

/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
module.exports = function (data) {
  var l10n = data.site[data.locale]
  return `<!DOCTYPE html>
  <html lang="${data.locale ? l10n.locale : data.site.defaultLocale}">
    ${this.headTag(data)}
    <body class="font-sans">

    <div id="main" class="flex flex-col items-center ">
    <div class="max-w-4xl">
    ${this.nav(data.collections.nav, data.page, '', l10n.nav.primary)}
      ${this.siteHeader(data)}
      <main>
      <span x-data="{message:'🤖 Hello, this text is brought to you by alpine.js 🤓'}" x-text="message">TEST</span>

        ${data.content}
        </main>


      ${this.siteFooter(data)}
      </div>
    </body>
  </html>`
}
