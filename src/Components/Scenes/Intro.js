import { Scene } from '@adapt-retail/animation-framework';
import { Video } from '@adapt-retail/animation-framework';

export default class Intro extends Scene {

    constructor( options = {} ) {

        super( options );

        // Get the image from banner info. 
        // adaptData.asset() will produce a url to the video based on adapt
        // (Also on the production file)
        this.video = 'assets/priceco_3D.mp4';

    }

    template() {
        return `

            <div class="frame">
                <video
                    class="video"
                    src="{{ video }}"></video>
            </div>
            <div class="frame">
                
            </div>
            
        `;
    }

    animate() {
        this.add(
            new Video( 
                this.template.querySelector( 'video' )
            )
        );
    }

}
