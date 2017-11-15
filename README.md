# Adapt Video template
> A great starting point for creating video banners just like a video editing software, only with code.

## Table of content
- [Install](#install)
- [Usage](#usage)
    - [Running your code](#running-your-code)
        - [`npm run watch`](#npm-run-watch)
        - [`npm run prod`](#npm-run-prod)
    - [Recommended skills](#recommended-skills)
    - [Folder structure](#folder-structure)
        - [src/Scripts](#src-scripts)
        - [src/Style](#src-style)
        - [Assets](#assets)
    - [Packages this template uses](#packages-this-template-uses)
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

<a name="usage"></a>
## Usage

<a name="running-your-code"></a>
### Running your code

After installation; open you terminal and `cd` in to your project root folder, and type the
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

<a name="recommended-skills"></a>
### Recommended skills

This template uses a variety of different helpers to make your workflow as
effective as possible. We recommend you to check out each package documentation
so you know what is available to use.

> At least check out the documentation for the animation framework [@adapt-retail/animation-framework](https://github.com/AdaptRetail/animation-framework).

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

Read the documentation for [@adapt-retail/animation-framework](https://github.com/AdaptRetail/animation-framework#license).

The code provided in this template is available for usage by all clients of [Adapt Retail](https://adaptretail.com).
