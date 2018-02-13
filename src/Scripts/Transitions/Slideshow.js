import { Transition } from '@adapt-retail/animation-framework';

export default class Slideshow extends Transition {

    /**
     * Animate the transition between two elements
     * The this.in and this.out is automaticly set in the Timlineline
     *
     * this.in represents the element we are animating in
     * this.out represents the element we are animating out
     *
     * @return void
     */
    animate() {

        let easeIn = Power3.easeOut;
        let easeOut = Power3.easeInOut;

        // Set the transform perspective for in and out elements

        // Animate out if it exists
        if (this.out) {
            this.set( this.out.template, {
                transformPerspective: 800,
            } );
            this.to( this.out.template, this.transitionTime/2, {
                ease: easeOut,
                rotationX: -90,
                transformOrigin: 'center bottom',
                opacity: 0,
            } );

            this.to(this.out.template.querySelector( '.price' ), this.transitionTime/2, {
                ease: easeOut,
                y: '100%',
            }, '-=' + this.transitionTime/2);
        }

        // Animate the element in if exists
        if (this.in) {
            // this.set( this.in.template, {
                // transformPerspective: 400,
            // } );
            this.fromTo( this.in.template, this.transitionTime/2, {
                // x: '-100%',
                transformPerspective: 400,
                ease: easeIn,
                rotationX: 90,
                transformOrigin: 'center bottom',
            }, {
                // x: '-100%',
                transformPerspective: 400,
                ease: easeIn,
                rotationX: 0,
            }, '-=.09' );

            this.from(this.in.template.querySelector( '.price' ), this.transitionTime/2, {
                ease: easeIn,
                y: '-100%',
            }, '-=' + this.transitionTime/2);

        }

    }

}
