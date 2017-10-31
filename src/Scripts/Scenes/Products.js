import Scene from './Scene';
import Video from '../Classes/Video';
import Product from './Product';

import SlideInOut from '../Transitions/SlideInOut';

export default class Products extends Scene {

    constructor( options = {} ) {
        super( options );
        this.products = window.products;
        this.background = adaptData.asset(
            window.bannerInfo[ 'custom.videoProducts' ]
        );

        this.image = bannerInfo[ 'custom.kampanjelogo' ];
        this.image = this.image ? adaptData.asset( this.image ) : null;
    }

    template() {
        return `
            <div id="products" class="frame">
                <video
                    class="video"
                    src="{{ background }}"></video>

                {{#image}}
                    <div class="kampanjelogo" style="
                        background-image: url( '{{ image }}' );
                    "></div>
                {{/image}}

            </div>
        `;
    }

    animate() {

        // Get the video tag element
        let video = this.template.querySelector( 'video' );

        // Add product Scenes to timeline
        for (var i = 0, len = this.products.length; i < len; i++) {

            // Add transition in and out between the products
            // Last product will not have a transition and will stay on screen
            this.add( new SlideInOut );

            // Add product scene to timeline.
            // Passe product information
            this.add( new Product( this.products[i], {
                // Make the products be renders to this container
                renderTo: this.template,
            }) );

        }

        // Add video background through the whole products animation
        this.add( new Video( video, {

            // This is the total duration from Product + Transition
            // We are hardcoding this cause at this point we do not know the totalDuration of this,
            // cause nothing is acually added to the timeline
            duration: ( 2 + .8 ) * this.products.length

                // This is the duration after last product is shown
                + 1


        } ), 0);

    }

}
