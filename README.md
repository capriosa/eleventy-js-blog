# Seven Eleven

A starter project showing how to build a blog with the [Eleventy](https://11ty.dev/) static site generator using [JavaScript templates (`*.11ty.js`)](https://11ty.dev/languages/javascript/). Based on eleventy-dot-js-blog but with TailwindCSS and AlpineJS.



## Demo

* [Netlify](https://seveneleven.netlify.ap)

## Summary

The layouts are written entirely in vanilla JavaScript (files with the [`*.11ty.js`](https://www.11ty.dev/docs/languages/javascript/) extension). Eleventy processes those templates and creates prerendered copies of the site HTML.

## Features
* From eleventy-dot-js-blog *
* 💯 Lighthouse scores for 
  * 💨 Performance 
  * ♿ Accessibility
  * ☑️  Best practices
  * 🔍 Search Engine Optimization
* 🏸 Lightweight front end
  * 🕸 Semantic HTML
  * 🎨 Progressively-enhanced, modular CSS
  * 🍦 Vanilla [JavaScript templates](https://11ty.dev/languages/javascript/)
* 🎛️ Customizable design and data options
* 🍬 [Choose](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_includes/shortcodes/favicon.js) between emoji favicons and the Real Favicon Generator
* 💡 Dark/light mode based on user’s system preferences
* 🔣 Multilingual support (instructions in [`./content/README.md`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/content/README.md) and [`./_data/README.md`](https://gitlab.com/reubenlillie/eleventy-dot-js-blog/-/blob/master/_data/README.md))
* 🔖 Smart pagination
* 🗒️ Extensive inline documentation
* Added for Seven Eleven *
* TailwindCSS
* AlpineJS


## Getting started

Run a local copy of this site on your computer.

Install [Node.js](https://nodejs.org/) on your machine (see [11ty documentation for version requirements](https://www.11ty.dev/docs/getting-started/)).

Then enter the following commands into your terminal:

### 1. Clone this repository and all its dependencies

### 2. Go to the working directory

Specifically take a look at the file named .eleventy.js to see if you want to [configure any Eleventy options differently](https://www.11ty.dev/docs/config/).

### 3. Install the project dependencies with [NPM](https://www.npmjs.com/)

```cli
npm install
```

### 4. Edit the `.js` files in the _data/site.js) directory with your site information

### 5. Run Eleventy

```cli
npx eleventy
```

Or build and host locally for local development

```cli
npx eleventy --serve
```

Or build automatically when a template changes

```cli
npx eleventy --watch
```

Or in debug mode

```cli
DEBUG=* npx eleventy
```

## Publish your own copy

The command `npm run build` will generate a copy of the site files in a `_site` directory, which you can deploy with any hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/capriosa/seven-eleven)

eleventy-dot-js-blog &copy; 2020 by [Reuben L. Lillie](https://twitter.com/reubenlillie)
