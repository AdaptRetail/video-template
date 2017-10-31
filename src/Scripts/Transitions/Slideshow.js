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

        let ease = Power3.easeInOut;

        // Animate the element in
        if (this.in) {
            this.set( [ this.in.template, this.in.template.querySelector( '.display__container' )], {
                transformPerspective: 400,
            } );
            this.from( this.in.template, this.transitionTime, {
                // x: '-100%',
                ease,
                rotationX: 90,
                transformOrigin: 'center bottom',
            }, 0 );

            this.from(this.in.template.querySelector( '.price' ), this.transitionTime, {
                ease,
                y: '-100%',
            }, 0);

        }

        if (this.out) {
            this.set( [ this.out.template, this.out.template.querySelector( '.display__container' )], {
                transformPerspective: 800,
            } );
            this.to( this.out.template, this.transitionTime, {
                ease,
                rotationX: -90,
                transformOrigin: 'center bottom',
                opacity: 0,
            }, 0 );

            this.to(this.out.template.querySelector( '.price' ), this.transitionTime, {
                ease,
                y: '100%',
            }, 0);
        }

    }

}
