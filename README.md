# Create Vue app with Parcel JS

[ParcelJS](https://github.com/parcel-bundler/parcel) is a configuration and development tool for JavaScript apps that tries to make it as easy as possible for the developer to add various features without having to edit `package.json` or `webpack.config.js`.

This repo contains a zero-config template for a very basic [Vue](https://vuejs.org/) app that also supports TypeScript & TSLint, SASS, and Babel transpilation for decent browser support.

## Usage

Due to the magic of Parcel, most of the configuration is implicit. Parcel automatically activates relevant feature support by looking at `package.json` dependencies and at the app entry point, which is `src/index.html`.

To get your project running from this app template you just have to:

1. Install the `parcel-bundler` module globally so you can use the `parcel` command from CLI.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run `parcel src/index.html` to start serving a hot-reload development version of the app in the browser or `parcel build src/index.html` to pack a production version in `dist/`.

See [the Parcel docs](https://parceljs.org/getting_started.html) for more.

## Customize configuration

Tools like Babel or TypeScript allow far too many possibilities for Parcel to be able to guess with 100% accuracy what the dev wants. Please have a look at:

* `src/index.html` and `src/index.ts` to see how to bootstrap the Vue app (it's nothing you haven't seen before if you're familiar with Vue, but it can be of interest to beginners).
* `.babelrc` for a very basic configuration that will target a sane selection of browsers.
* `tsconfig.json` for a config that indicates `src/` as the source dir, sets `es2015` as the main JS support target, lets you install additional type definitions under `node_modules/@types`, and communicates a default set of libs to your editor to use for hinting.

## Extra options

Parcel can be extended with [plugins](https://www.npmjs.com/search?q=parcel-plugin*). Plugins can do interesting things such as [using SVGs inline](https://www.npmjs.com/package/parcel-plugin-inlinesvg) or adding [mandatory TS verification](https://www.npmjs.com/package/parcel-plugin-typescript) as part of the compilation.

## Notes
  
* Parcel 1.x has issues loading `.scss` files referred from `.vue` by default, so it's best to load your `index.scss` from `index.html`. Parcel 2.x will hopefully cover this out of the box.
* Some IDE have a "safe write" mode where they save modified files to a temporary one then replace it on the fly. This doesn't mix very well with the Parcel watcher ([more details](https://parceljs.org/hmr.html#safe-write)).
