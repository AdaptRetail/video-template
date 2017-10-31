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
            this.from( this.in.template, this.transitionTime/2, {
                // x: '-100%',
                ease,
                rotationX: 90,
                transformOrigin: 'center bottom',
                // webkitFilter: 'blur( 15px )',
            }, 0 );

            this.from( this.in.template.querySelector( '.display__container' ), this.transitionTime/2 - this.transitionTime/5, {
                // x: '-100%',
                ease: Power3.easeOut,
                rotationX: 45,
                transformOrigin: 'center bottom',
                // webkitFilter: 'blur( 15px )',
            }, '-=' + this.transitionTime/5);

            this.from(this.in.template.querySelector( '.price' ), this.transitionTime, {
                ease: Power3.easeOut,
                y: '-40%',
            }, 0);

            this.add( function() {
                console.log('animation done');
            } );

        }

        if (this.out) {
            this.set( this.out.template, {
                transformPerspective: 1000,
            } );
            this.to( this.out.template, this.transitionTime/2, {
                // x: '-100%',
                ease,
                rotationX: -90,
                transformOrigin: 'center bottom',
                opacity: 0,
                // webkitFilter: 'blur( 15px )',
            }, 0 );
        }

    }

}
