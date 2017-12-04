# Adapt Video template
> A great starting point for creating video banners just like a video editing software, only with code.

[![Priceco Social Media Video](https://img.youtube.com/vi/OE-5Xb5wQfA/0.jpg)](https://www.youtube.com/watch?v=OE-5Xb5wQfA)

## Table of content
- [Install](#install)
- [Usage](#usage)
    - [Local development](#npm-run-watch)
    - [Prepare files for production](#npm-run-prod)
    - [Files](#files)
- [Dependencies](#dependencies)
- [Extracted style](#extracted-style)
- [Publish to Adapt Retail](#publish)
- [License](#license)

<a name="install"></a>
## Install

```bash
# Clone repository
git clone https://github.com/AdaptRetail/video-template

# Go to directory
cd video-template

# Install dependencies
npm install 
```

<a name="usage"></a>
## Usage

> All dependencies must be [installed](#install) before you can start using the template.

This template is using `npm`, `Sass` and `Webpack` to build your files and containing [some extra helpers](#dependencies) to make things easier for you.

> This project is heavily dependent on [GreenSock animation framework](https://greensock.com/gsap).
> Make sure you understand the basic of GSAP before starting to use this template.

<a name="npm-run-watch"></a>
### Local development

```bash
# Open file in default browser (browser-sync) and
# auto refresh browser on file save
npm run watch
```

> You can also display your production on other devices on your local network.
> Check your terminal for information after running `npm run watch`.

<a name="npm-run-prod"></a>
### Prepare files for production

```bash
# Compile files to dist/ folder
npm run prod
```

The `npm run prod` command is compiling and minifying the css and javascript.
All your files will be compiled to the `dist/` folder.

<a name="files"></a>
### Files

All your production files will be found in the `src/` folder.

We have provided the files with some content, but
this is your files and we don't tell you what you do. 
This is our approach when we are creating production, 
and you may add, move and remove files however you want.

> All files are thoroughly commented, so if you're in doubt, just read the source. 

<a name="script"></a>
#### [`src/Script/main.js`](https://github.com/AdaptRetail/video-template/blob/master/src/Scripts/main.js)

> This project is built on [AdaptRetail/animation-framework](https://github.com/AdaptRetail/animation-framework).
> You see information about each class on the [repository page](https://github.com/AdaptRetail/animation-framework).

This is the main file for your JavaScript and this is where we initialize your main timeline.
What to do from this point is totally up to you.

This file will be compiled down with [Webpack](https://webpack.github.io/) using [laravel-mix](https://github.com/JeffreyWay/laravel-mix).
This gives you some cool opertunities like.

- [Up to ECMAScript 6 (ES6) JavaScript syntax](http://es6-features.org/)
- [Import packages through NPM modules](https://www.npmjs.com/)
- And more

##### [`src/Scripts/Scenes/`](https://github.com/AdaptRetail/video-template/tree/master/src/Scripts/Scenes)

This folder is holding all your [Scenes](https://github.com/AdaptRetail/animation-framework#scene).
The scenes are handling the logic and animation for each scene in the animation.

##### [`src/Scripts/Transitions/`](https://github.com/AdaptRetail/video-template/tree/master/src/Scripts/Transitions)

This folder is holding all your [Scenes](https://github.com/AdaptRetail/animation-framework#transition).

The transitions contains the animation between each scene.

<a name="style"></a>
#### [`src/Style/main.scss`](https://github.com/AdaptRetail/video-template/blob/master/src/Style/main.scss)

This is the main Sass file.
This file is including all the other sass files.
Do whatever you want from here.

We have set up some logic to get you started. Browse through the files and see what each file does.
If you want to overwrite some variables you can do it in [`src/Style/Utilities/Variables.scss`](https://github.com/AdaptRetail/video-template/blob/master/src/Style/Utilities/Variables.scss).

> Most of the files are containing variables you can over write in this file.
> Just add the variable here, and it will be overwritten.
> Try `$google-font-name: "Lobster";`

<a name="dependencies"></a>
## Dependencies

This project is using different dependencies to make it easier to make display banners.

<a name="banner-style"></a>
### [Banner style](https://github.com/AdaptRetail/banner-style)

Micro frontend framework containing helpers like `grid` system using flex.

<a name="sass-asset-inline"></a>
### [sass-asset-inline](https://github.com/LasseHaslev/sass-asset-inliner)

Inline assets like `image` and `fonts` in your sass files with simple syntax.

```scss
@font-face {
    src: inline-font( 'path/to/your/font.ttf' ); // Include full font

    // Subset font by adding regex as second parameter
    // of each character you want to include
    src: inline-font( 'path/to/your/font.ttf', '[0-9]' );
}

body {
    // Inline image
    background-image: inline-image( 'path/to/your/image.png' );

    // Inline and resize image to width (Kepp aspect ratio)
    background-image: inline-image( 'path/to/your/image.png', "200" );

    // Resize image and ignoring aspect ratio
    background-image: inline-image( 'path/to/your/image.png', "200x400" );

    // Resize image to height and keep aspect ratio
    background-image: inline-image( 'path/to/your/image.png', "_x400" );

    // Underscore works also for height.
    // ("200x_" equals "200" as shown above)
}
```

> All files are included from your root folder.

### [Adapt Data](https://github.com/AdaptRetail/banner-data)

Communicate with Adapt Retail productions through our API.

### [laravel-mix](https://github.com/JeffreyWay/laravel-mix)

We are extending [laravel-mix](https://github.com/JeffreyWay/laravel-mix) with [Laravel mix extender](https://github.com/AdaptRetail/adapt-mix-extender) to include helpers like the [sass-asset-inline](#sass-asset-inline)

<a name="extracted-style"></a>
## Extracted style

Some of the style of this template has been extracted [to another git repository](https://github.com/AdaptRetail/priceco-style).
This is to reuse the elements and components in other productions.

This is a recommendation if you are creating multiple templates for [Adapt Retail](https://adaptretail.com).

<a name="publish"></a>
## Publishing to [Adapt Retail](https://adaptretail.com)

1. [Log in to your Adapt retail account](https://app.adaptretail.com/signup_login.php?task=login)
1. Click on template section in your left navigation bar
1. Create a new `Banner` template
1. Set your properties in `Details` tab
1. Select `Files` tab
1. Prepare files to [Adapt Retail](https://adaptretail.com) by running `npm run prod` in your terminal.
1. Drag `dist/ad.js` and `dist/ad.css` to the `dropzone (Drop files or click to upload)` in Adapt
1. **And you are done!**

<a name="license"></a>
## License

Read the documentation for [@adapt-retail/animation-framework](https://github.com/AdaptRetail/animation-framework#license).

The code provided in this template is available for usage by all clients of [Adapt Retail](https://adaptretail.com).
