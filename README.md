# Adapt Video template Video template
> A great starting point for creating video banners just like a video editing
> program, only with code.

## Install

```bash
# Clone repository
git clone https://github.com/AdaptRetail/video-template

# Go to directory
cd video-template

# Install dependencies
npm install 
```

#### Before this package is out
```bash
# Go to directory
cd node_modules/@adapt-retail/animation-framework

# Install dependencies
npm install

# Build files
npm run build
```

## Usage

### Folder structure

#### src/Scripts
This is where all you javascript is added. The `main.js` is the starting point
for your banner.
This is also where you create and start you main Timeline element.

The `Scenes` folder is where you add your scenes.
The `Transitions` folder is where you add your transitions.

Thats it for the scripts!

#### src/Style

This is where you add you Sass files. The `main.scss` Is where you import all
other files. You can find your sass variables in `src/Style/Utilities/Variables.scss`.

The `src/Style/Scenes/` folder are meant to host all the style for each Scenes.
While the `src/Style/Elements` are for all the elements in the view. See
`src/Style/Elements/Price.scss` as an example.

#### Assets
The assets folder is used to store assets to use in this project.

> When using sass-asset-inliner it uses the relative path from the `root` not
> the folder you are currently in.

### Running your code

Open you terminal and go/`cd` in to your project root folder, and type the
following command.

#### `npm run watch`
You can see the banner when working on it simply by writing `npm run watch`.
This will start [Browser Sync](https://www.browsersync.io/) and will display your content in your web browser.
The browser will refresh every time you save a file.

> If you want to test your banners on different devices you can see in the terminal after you entered the command.
> There will be a `External` info with a `ip-address`. 
> Copy paste that info into your browser on your external devices and watch the magic happens.

> Note: All the external devices must be on the same local network as your development machine.

#### `npm run prod`
The `npm run prod` command is minifying css and javascript and removes source maps.
It will also prepare the banners to put in to [Adapt Retail](https://adaptretail.com).
<!-- The prod command will also change `AdaptData` to `LightAdaptData`. -->

## Recommended Skills

This template uses a variety of different helpers to make your workflow as
effective as possible. We recommend you to check out each package documentation
so you know what is available to use.

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

### Packages this template uses
These are the packages, this template depend on. We recommend you take a look at
these to. At least the first one.
- [@adapt-retail/animation-framework (The structure and engine for this template)](https://github.com/AdaptRetail/animation-framework)
- [@adapt-retail/banner-style (Sass Micro framework for banners)](https://github.com/AdaptRetail/banner-style)
    - [@lassehaslev/sass-asset-inline (Possibility to base64 files in Sass)](https://github.com/LasseHaslev/sass-asset-inliner)
- [@adapt-retail/banner-data (Communicate with Adapt Retail)](https://github.com/AdaptRetail/banner-data)
- [laravel-mix (An elegant wrapper around Webpack for the 80% use case.)](https://github.com/JeffreyWay/laravel-mix)
    - [@adapt-retail/adapt-mix-extender (Extending laravel-mix to include awesome features)](https://github.com/AdaptRetail/adapt-mix-extender)

## Building banners

The adapt banner builder is extending [laravel-mix](https://github.com/JeffreyWay/laravel-mix).
Therefor you can customize whats happens when building using `webpack.mix.js`.

### Style

The banner builder is including [sass-asset-inliner](https://github.com/LasseHaslev/sass-asset-inliner) for base64 encoding assets.
Even though `laravel-mix` is including multiple asset compilers, the `asset-inliner` will only be included when you use the `sass` compiler.

### Best practice

#### Responsiveness
When building banners you should have the responsive thinking.
Use as much `%`, `em`, `rem` values for width and padding on elements.
And use `vw`, `em` and `rem` for texts. Never write static properties.

#### [ Media queries ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

If you write good responsive banners you almost only need to think about 3 formats.
`topbanner`, `skyscraper` and `board`.
If you make good banners it does not matter if the banner is `180x500` or `120x480`.

One of the best media queries are [ aspect ratio ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#aspect-ratio)

#### Make your style external
Often when you are creating templates to all modules in [Adapt Retail](https://adaptretail.com),
you often end up with duplicating both the `Style` and `Script` logic.

If this is the case we recommend two options to you: 
##### Create a shared folder containing templates folders and shared `style` and `script` logic folders
making the assets accessible through either a
`Shared folder` for all the templates and you extract the reusable files from there.

##### Create a `Github repository`
The `Github repository` will contain all the reusable files.
Now you can just `npm install {github url}` in to your project. Now you can find your files
in `node_modules`.
