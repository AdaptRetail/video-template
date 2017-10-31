import Transition from '../Transitions/Transition';

export default class SlideInOut extends Transition {

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
            this.from( this.in.template, this.transitionTime, {
                x: '-100%',
                ease,
            }, 0 );
        }

        if (this.out) {
            this.to( this.out.template, this.transitionTime, {
                x: '100%',
                ease,
            }, 0 );
        }

    }

}
