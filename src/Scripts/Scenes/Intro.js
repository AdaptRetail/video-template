import { Scene } from '@adapt-retail/animation-framework';
import { Video } from '@adapt-retail/animation-framework';

export default class Intro extends Scene {

    constructor( options = {} ) {

        super( options );

        // Get the image from banner info. 
        // adaptData.asset() will produce a url to the video based on adapt
        // (Also on the production file)
        this.video = 'assets/priceco_3D.mp4';
        this.logo = 'assets/priceco_logo.svg'; // Switch out theese with the custom fields

    }

    template() {
        return `

            <div id="intro" class="frame">
                <div class="frame">
                    <video
                        class="video"
                        src="{{ video }}"></video>
                </div>
                <div class="frame logo" style="background-image: url( {{ logo }} )">
                </div>
            </div>
            
        `;
    }

    animate() {
        this.add(
            new Video( 
                this.template.querySelector( 'video' )
            )
        );

        this.from( this.template.querySelector( '.logo' ), .8, {
            opacity: 0,
        } );
    }

}
