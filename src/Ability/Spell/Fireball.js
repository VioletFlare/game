import BaseSpell from './BaseSpell';

import texPng from '../../../assets/flares/flares_tex.png';
import texJson from '../../../assets/flares/flares_tex.json';

class Fireball extends BaseSpell {

    constructor() {
        super();
    }

    preload(scene) {
        this.scene = scene;
        this.scene.load.atlas('flares', texPng, texJson);
    }

    create() {
        const particles = this.scene.add.particles('flares');

        this.emitter = particles.createEmitter({
            frame: 'yellow',
            radial: false,
            lifespan: 2000,
            speedX: { min: 200, max: 400 },
            quantity: 4,
            gravityY: -50,
            scale: { start: 0.6, end: 0, ease: 'Power3' },
            blendMode: 'ADD',
            on: false
        });
    }

    cast(user, target) {

        if (target) {
            const trajectory = new Phaser.Geom.Line(user.x, user.y, target.x, target.y),
                emitZone = { 
                    type: 'edge', 
                    source: trajectory, 
                    quantity: 48, 
                    yoyo: false 
                };

            this.emitter.setEmitZone(emitZone);
            this.emitter.emitParticle();
        }

    }

}

export default new Fireball();