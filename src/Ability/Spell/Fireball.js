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
            lifespan: 2000,
            speedX: { min: 200, max: 400 },
            quantity: 4,
            gravityY: -50,
            scale: { start: 0.6, end: 0, ease: 'Power3' },
            blendMode: 'ADD',
            on: false
        };
    }

    create() {
        super.create('flares', this.emitterConfiguration);
    }

    

}

export default new Fireball();