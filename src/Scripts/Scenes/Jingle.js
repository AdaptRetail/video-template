import { Scene } from '@adapt-retail/animation-framework';
import { Video } from '@adapt-retail/animation-framework';

export default class Jingle extends Scene {

    constructor( options = {} ) {

        super( options );

        this.isShort = options.short || false;

        // Get the image from banner info. 
        // adaptData.asset() will produce a url to the video based on adapt
        // (Also on the production file)
        this.video = adaptData.asset( window.adaptResponse.fields.video.value );

    }

    template() {
        return `

            <div id="jingle" class="frame">
                <div class="frame">
                    <video
                        class="video"
                        src="{{ video }}"></video>
                </div>
                {{^isShort}}
                    <div class="frame logo"></div>
                {{/isShort}}
            </div>
            
        `;
    }

    animate() {
        this.add(
            new Video( 
                this.template.querySelector( 'video' )
            )
        );

        if (!this.isShort) {
            this.from( this.template.querySelector( '.logo' ), .8, {
                opacity: 0,
            } );
        }
    }

}
