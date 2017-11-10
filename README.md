# Adapt Video template Video template
> A great starting point for creating video banners just like a video editing
> program, only with code.

## Table of content
- [Install](#install)
- [Usage](#usage)
    - [Running your code](#running-your-code)
        - [`npm run watch`](#npm-run-watch)
        - [`npm run prod`](#npm-run-prod)
    - [Folder structure](#folder-structure)
        - [src/Scripts](#src-scripts)
        - [src/Style](#src-style)
        - [Assets](#assets)
- [Recommended skills](#recommended-skills)
    - [General web knowledge](#general-web-knowledge)
    - [Packages this template uses](#packages-this-template-uses)
- [Building banners](#building-banners)
    - [Style](#style)
    - [Best practice](#best-practice)
        - [Responsiveness](#responsiveness)
        - [Media queries](#media-queries)
        - [Make your style external](#make-your-style-external)
            - [Shared folder](#shared-folder)
            - [Github repository](#github-repository)
- [Publish to Adapt Retail](#publish-to-adapt-retail)
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

#### (Hey, Jack, over here!) Full install before this package is released 

Before the framework is released, there are some extra steps to take before this template will work properly.
Follow these instructions. These steps will be removed when the framework is released.

##### Prepare the framework as a local package
```bash
# Clone repository
git clone https://github.com/LasseHaslev/adapt-animation-framework.git

# Go to directory
cd adapt-animation-framework

# Install dependencies
npm install

# Build files to dist folder
npm run build

# Make npm package globally accessable on system
# Usually done when developing packages
npm link

# Go out of the adapt-animation-framwork folder
cd ..
```

##### Build the template using the local framework package

Back in the "root" we are ready to get the template.

```bash
# Clone repository
git clone https://github.com/LasseHaslev/adapt-video-template.git

# Go to directory
cd adapt-video-template

# Install dependencies
npm install

# Import the globally accessible framework package
# This overwrites the npm/github package to the local one we just created.
# ( Usually done when developing packages )
npm link @adapt-retail/animation-framework
```

<a name="usage"></a>
## Usage

<a name="running-your-code"></a>
### Running your code

Open you terminal and `cd` in to your project root folder, and type the
following command.

<a name="npm-run-watch"></a>
#### `npm run watch`
You can see the banner when working on it simply by writing `npm run watch`.
This will start [Browser Sync](https://www.browsersync.io/) and will display your content in your web browser.
The browser will refresh every time you save a file.

> If you want to test your banners on different devices you can see in the terminal after you entered the command.
> There will be a `External` info with a `ip-address`. 
> Copy paste that info into your browser on your external devices and watch the magic happens.

> Note: All the external devices must be on the same local network as your development machine.

<a name="npm-run-prod"></a>
#### `npm run prod`
The `npm run prod` command is minifying css and javascript and removes source maps.
It will also prepare the banners for uploading to [Adapt Retail](https://adaptretail.com).
<!-- The prod command will also change `AdaptData` to `LightAdaptData`. -->

<a name="folder-structure"></a>
### Folder structure

<a name="src-scripts"></a>
#### src/Scripts
This is where all you javascript is added. The `main.js` is the starting point
for your banner.
This is also where you create and start you main Timeline element.

The `Scenes` folder is where you add your scenes.
The `Transitions` folder is where you add your transitions.

Thats it for the scripts!

<a name="src-style"></a>
#### src/Style

This is where you add you Sass files. The `main.scss` Is where you import all
other files. You can find your sass variables in `src/Style/Utilities/Variables.scss`.

The `src/Style/Scenes/` folder are meant to host all the style for each Scenes.
While the `src/Style/Elements` are for all the elements in the view. See
`src/Style/Elements/Price.scss` as an example.

Personally i like to add a `_all.scss` to each Folder, that takes care of
importing all other sass file in that folder. See `src/Style/Elements/_all.scss`
as an example.

<a name="assets"></a>
#### Assets
The assets folder is used to store assets to use in this project.
We recommend inline most assets, as it makes the process of uploading to [Adapt Retail](https://adaptretail.com) much easier.

> When using sass-asset-inliner it uses the relative path from the `root`,
> not the folder you are currently in. This means
> `inline-image( 'assets/priceco_logo.svg' )` no matter where you currently are.

<a name="recommended-skills"></a>
## Recommended skills

This template uses a variety of different helpers to make your workflow as
effective as possible. We recommend you to check out each package documentation
so you know what is available to use.

<a name="general-web-knowledge"></a>
### General web knowledge
> All the following list items are modern web standards, and learning these skills will help you be a better developer in general.

This template is built using a variety of web standard packages, and it is
recommended that you are familiar with the following tecnologies.
- [Javscript](https://www.javascript.com/)
- [Git (version control)](https://try.github.io/levels/1/challenges/1)
- [Github](https://github.com)
- [NPM (Package manager for NodeJS)](https://www.npmjs.com/)
- [Sass (CSS with superpowers)](http://sass-lang.com/)
- [GreenSock/GSAP (animation framework)](https://greensock.com/gsap)

<a name="packages-this-template-uses"></a>
### Packages this template uses
These are the packages, this template depend on. We recommend you take a look at
these to. At least the first one.
- [@adapt-retail/animation-framework (The structure and engine for this template)](https://github.com/AdaptRetail/animation-framework)
- [@adapt-retail/banner-style (Sass Micro framework for banners)](https://github.com/AdaptRetail/banner-style)
    - [@lassehaslev/sass-asset-inline (Possibility to base64 files in Sass)](https://github.com/LasseHaslev/sass-asset-inliner)
- [@adapt-retail/banner-data (Communicate with Adapt Retail)](https://github.com/AdaptRetail/banner-data)
- [laravel-mix (An elegant wrapper around Webpack for the 80% use case.)](https://github.com/JeffreyWay/laravel-mix)
    - [@adapt-retail/adapt-mix-extender (Extending laravel-mix to include awesome features)](https://github.com/AdaptRetail/adapt-mix-extender)

<a name="building-banners"></a>
## Building banners

The adapt banner builder is extending [laravel-mix](https://github.com/JeffreyWay/laravel-mix).
Therefor you can customize whats happens when building using `webpack.mix.js`.

<a name="style"></a>
### Style

The banner builder is including [sass-asset-inliner](https://github.com/LasseHaslev/sass-asset-inliner) for base64 encoding assets.
Even though `laravel-mix` is including multiple asset compilers, the `asset-inliner` will only be included when you use the `sass` compiler.

<a name="best-practice"></a>
### Best practice

<a name="responsiveness"></a>
#### Responsiveness
When building banners you should have the responsive thinking.
Use as much `%`, `em`, `rem` values for width and padding on elements.
And use `vw`, `em` and `rem` for texts. Never write static properties.
Avoid using `px`, `pt` when creating banners. 

<a name="media-queries"></a>
#### [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

If you write good responsive banners you almost only need to think about 3 formats.
`topbanner`, `skyscraper` and `board`.
If you make good banners it does not matter if the banner is `180x500` or `120x480`.

One of the best media queries are [ aspect ratio ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#aspect-ratio)

<a name="make-your-style-external"></a>
#### Make your style external
> This package does not use this approach, this is cause we need the styles and
> logic for reference and your learning in each template.

Often when you are creating templates to all modules in [Adapt Retail](https://adaptretail.com),
you often end up with duplicating both the `Style` and `Script` logic.

If this is the case we recommend two options to you: 

<a name="shared-folder"></a>
##### Create a shared folder containing templates folders and shared `style` and `script` logic folders
making the assets accessible through either a
`Shared folder` for all the templates and you extract the reusable files from there.

<a name="github-repository"></a>
##### Create a `Github repository`
The `Github repository` will contain all the reusable files.
Now you can just `npm install {github url}` in to your project. Now you can find your files
in `node_modules`.

<a name="publish-to-adapt-retail"></a>
## Publishing to [Adapt Retail](https://adaptretail.com)

1. Prepare files to [Adapt Retail](https://adaptretail.com) by running `npm run prod` in your terminal.
1. [Log in to your Adapt retail account](https://app.adaptretail.com/signup_login.php?task=login)
1. Click on template section in your left navigation bar
1. Create a new `Banner template`
1. Set your properties in `Details` tab
1. Select `Files` tab
1. Drag `dist/ad.js` and `dist/ad.css` to the `dropzone (Drop files or click to upload)` in Adapt
1. **And you are done!**

<a name="license"></a>
## License

The code provided in this template is MIT Licensed,
but it rely on external packages that may not.

Read the documentation for [@adapt-retail/animation-framework](https://github.com/AdaptRetail/animation-framework#license).
