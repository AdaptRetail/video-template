# Adapt Video template Video template
> A great starting point for building product based banners.

![Demo of banner template](assets/banner_preview.gif)

## Recommended Skills

This template uses a variety of different helpers to make your workflow as
effective as possible. We recommend you to checkout each package documentation
so you know what is able for you to use.

### General web knowledge
> All packages are modern web standard and learning these skills will help you be a better developer.

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

### `npm run watch`
You can see the banner when working on it simply by writing `npm run watch`.
This will start [Browser Sync](https://www.browsersync.io/) and will display your content, and refresh your browsers every time you save a file.

If you want to test your banners on different devices you can see in the terminal after you entered the command.
There will be a `External` info with a `ip-address`. 
Copy paste that info into your browser on your external devices and watch the magic happens.

> Note: All the external devices must be on the same local network as your development machine.

### `npm run prod`
The `npm run prod` command is minifying css and javascript and removes source maps.
<!-- The prod command will also change `AdaptData` to `LightAdaptData`. -->

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
