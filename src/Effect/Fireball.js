import texPng from '../../../assets/flares/flares_tex.png';
import texJson from '../../../assets/flares/flares_tex.json';

class Fireball {

    constructor(scene) {
        this.emitterConfiguration = {
            frame: 'yellow',
            radial: false,
            lifespan: 1000,
            speedX: { min: 50, max: 120 },
            quantity: 1,
            gravityY: 0,
            scale: { start: 0.3, end: 0.1, ease: 'Power3' },
            blendMode: 'ADD',
            on: false
        };

        this.physicConfiguration = {
            width: 20,
            height: 20,
            offsetX: -10,
            offsetY: -8
        };

        this.key = 'flares';

        this.scene = scene;
    }

    preload() {
        this.scene.load.atlas(this.key, texPng, texJson);
    }

}

export default Fireball;