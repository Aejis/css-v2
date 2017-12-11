# Aejis CSS v2

## Requirements

Aejis CSS v2 require [normalize.css](https://github.com/necolas/normalize.css) to be included before all styles
and [Autoprefixer](https://github.com/postcss/autoprefixer) in the build stack.

## Usage

* Copy `lib` folder to your project CSS folder in subfolder vendor
* Add to main `.scss` file: `@import 'vendor/aejis/main';`

## Generate and serve docs

* `npm install -g gulp`
* `npm install`
* `gulp docs`

Then go to http://localhost:8000/index.html
