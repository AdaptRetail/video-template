import Scene from './Scene';

export default class Product extends Scene {

    constructor( product, options ) {
        super( options );
        this.product = this.format( product );

        this.animationTime = 2;
        this.priceDisplayTime = 1.5;
    }


    template() {
        return `
            <div class="product">

                <div class="product__content">
                    <div class="product-image" style="background-image:url( {{ product.image }} );"></div>
                    <div class="price">
                        <div class="price__container">
                            <div class="price__number price__integer">{{ product.price.integer }}</div><div class="price__number price__decimal">{{ product.price.decimal }}</div>
                        </div>
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
        var price = item.price.replace( /(\d+)[\.,:]*(\d+)*/, '$1.$2' );
        var priceString = parseFloat( Math.round( price * 100 ) / 100 ).toFixed(2);

        return {
            image: adaptData.asset( item.image ),
            price: {
                integer: priceString.split('.')[0],
                decimal: priceString.split('.')[1],
            },
        };
    }

    animate() {

        // Get the price element to reuse later
        this.priceTag = this.template.querySelector( '.price' );

        // Reset the price tag flick
        this.add( this.setThePercentageOfHowVisibleThePriceTagShouldBe() );

        // Animate in opacity
        this.from( this.priceTag, .3, {
            opacity: 0,
        } );

        // Animate the price flick to full price tag.
        // The paramter is to offset the animation 0.2 seconds before opacity is 100%
        this.animatePriceFlickToFullPriceTag( '-=.2' );
        
        // Rotate the image in the full duration of the animation
        this.to( this.template.querySelector( '.product-image' ), this.animationTime, {
            rotation: '-=5',
        }, 0 );

    }

    /**
     * Set the price flick to a value
     *
     * @param value
     *
     * @return TweenMax
     */
    setThePercentageOfHowVisibleThePriceTagShouldBe( value = 0 ) {
        return TweenMax.set( this.priceTag, {
            clipPath: 'polygon(' + value + '% 0, 100% ' + (100-value) + '%, 100% 100%, 0 100%, 0 0)',
        } );
    }

    /**
     * Animate price flick to full price tag
     *
     * @return void
     */
    animatePriceFlickToFullPriceTag( align = '+=0' ) {

        var self = this;

        var fromValue = { value: 0 };
        this.to( fromValue, .5, {
            value: 100,
            onUpdate( test ) {
                self.setThePercentageOfHowVisibleThePriceTagShouldBe( fromValue.value );
            },
            onComplete() {
                fromValue.value = 0;
            }
        }, align );
    }

}
