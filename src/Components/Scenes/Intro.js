import { Scene } from '@adapt-retail/animation-framework';
import { Video } from '@adapt-retail/animation-framework';

/*
 * Warning:
 * Not shure if we can use Vivus
 *
 * https://github.com/maxwellito/vivus/blob/master/LICENSE
 */
export default class Intro extends Scene {

    constructor( options = {} ) {

        super( options );

        // Get the image from banner info. 
        // adaptData.asset() will produce a url to the video based on adapt
        // (Also on the production file)
        this.video = window.adaptData.asset(
            window.bannerInfo[ 'custom.videoIntro' ]
        );

    }

    template() {
        return `

            <div class="frame">
                <video
                    class="video"
                    src="{{ video }}"></video>
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
