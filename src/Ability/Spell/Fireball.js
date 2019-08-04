import Spell from './Spell';
import texPng from '../../../assets/flares/flares_tex.png';
import texJson from '../../../assets/flares/flares_tex.json';

class Fireball extends Spell {

    constructor() {
        super();
    }

    preload(scene) {
        super.preload(scene);
        this.scene.load.atlas('flares', texPng, texJson);
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
    }

    create() {
        super.create('flares', this.emitterConfiguration);
    }

    

}

export default new Fireball();