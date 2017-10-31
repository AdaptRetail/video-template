//compensate only when 1000ms or more elapses between 2 ticks,
//and then make it act like only 16ms elapsed:

import AdaptData from '@adapt-retail/banner-data';

/**
 * !!! Warning !!!:
 *
 * All Transitions must be importet before each other object That extends Scene
 * Else it get circular error in webpack
 *
 */
import { Transition } from '@adapt-retail/animation-framework';
import Jingle from './Scenes/Jingle';
import Products from './Scenes/Products';
import Timeline from '@adapt-retail/animation-framework';



// Prepare adapt data
window.adaptData = new AdaptData( {
    account: 'priceco58c12436f20b4',
    project: 1,
    campaign: 1,
    production: 1,
} );

// Run init when DOM is ready
document.addEventListener( "DOMContentLoaded", function(e) {

    adaptData.start( function( items ) {

        // When adding any property to window, you are making it globaly accessable throughout the project
        // This means that we can access the properties in the Scenes used later

        // Convert products to an array, this will be added to @adapt-retail/banner-data later
        // We are also adding it to products later
        window.products = Object.keys( items.data ).map( function(key) {
            return items.data[key];
        } );

        // Get the information from the products.
        // (The information lies on first index of products array)
        // .shift() return the first element and remove it from the products array
        window.bannerInfo = window.products.shift();

        // Add Scene objects to timeline to auto add them
        // Add it to window to work on it in the console.
        let timeline = window.timeline = new Timeline();

        // Add Scenes to timeline
        timeline.add(new Jingle);
        timeline.add(new Transition( 0 ));
        timeline.add(new Products);
        timeline.add(new Transition( .5 ));
        timeline.add(new Jingle, '-=.5');

        // When ready, we start the timeline
        timeline.start();

    } );

} );

