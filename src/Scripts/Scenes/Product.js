import { Scene } from '@adapt-retail/animation-framework';

export default class Product extends Scene {

    constructor( product, options ) {
        super( options );
        this.product = this.format( product );

        this.animationTime = 2;
        this.priceDisplayTime = 1.5;
    }


    template() {
        return `
            <div class="frame product">

                <div class="grid is-vertical">
                    <div class="column is-filled">
                        <div class="display__container">
                            <div class="product-image" style="background-image: url({{ product.image }});"></div>

                            {{#product.pricematch}}
                                <div class="bomb is-pricematch"></div>
                            {{/product.pricematch}}
                            {{#product.threefortwo}}
                                <div class="bomb is-threefortwo"></div>
                            {{/product.threefortwo}}

                            <div class="price">
                                <div class="price__number price__integer">{{ product.price.integer }}</div><div class="price__number price__decimal">{{ product.price.decimal }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-narrow product__info__container">
                        <div class="vendor-logo image" style="background-image: url({{ product.vendorlogo }});"></div>
                        <div class="name">{{ product.name }}</div>
                        <!-- <div class="description">{{ product.description }}</div> -->
                        <div class="price__save">Was <span>{{ product.price.before }}</span></div>
                    </div>
                </div>

            </div>
        `;
    }

    /**
     * Format data to make it easier to work with from Adapt
     *
     * @return Object
     */
    format(item) {
        var tmpPrice = item.pricenow.split( /[,\.]/ );

        var returnValue = {
            name: item.name,
            image: adaptData.asset( item.image ),
            // Fix!! Dette skal vel være this.asset?
            vendorlogo: adaptData.asset( item.vendorlogo ),
            pricematch: item.pricematch === "1",
            threefortwo: item.threefortwo === "1",
            description: item.descriptionshort,

            /**
             * Split the price now to become array with integer and decimal
             * If no decimal is found, we set as 00
             */
            price: {
                before: item.pricebefore,
                integer: tmpPrice[0],
                decimal: tmpPrice.length >= 2 ? tmpPrice[1] : '00',
            },

            /**
             * Set the url to google analytics if url does not exists
             */
            url: item.url || 'https://google.com' + response.details.ga_url + '&utm_content=' + item.id,
        }

        return returnValue;
    }

    animate() {

        // Get the price element to reuse later
        this.priceTag = this.template.querySelector( '.price' );

        if ( this.product.pricematch || this.product.threefortwo ) {
            this.from( this.template.querySelector( '.bomb' ), .4, {
                scale: 2,
                rotation: '+=30',
                opacity: 0,
            }, 1 );
            this.to( this.template.querySelector( '.bomb' ), .8, {
                ease: SlowMo.ease.config( 0, 2, true ),
                scale: 1.2,
                rotation: '+=30',
            }, '-=.8' );
        }

        this.addPause( '+=1.5' );

    }

}
