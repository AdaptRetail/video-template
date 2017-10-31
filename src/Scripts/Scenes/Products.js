import { Scene } from '@adapt-retail/animation-framework';
import Product from './Product';

import SlideInOut from '../Transitions/SlideInOut';

export default class Products extends Scene {

    constructor( options = {} ) {
        super( options );
        this.products = window.products;
    }

    template() {
        return `
            <div id="products" class="frame"></div>
        `;
    }

    animate() {

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

    }

}
