import BaseSpell from './BaseSpell'

class Fireball extends BaseSpell {

    constructor() {
        super();
    }

    preload(scene) {
        this.scene = scene;
        this.scene.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    cast(user, target) {

        if (target) {
            const particles = this.scene.add.particles('flares'),
            trajectory = new Phaser.Geom.Line(user.x, user.y, target.x, target.y);

            particles.createEmitter({
                frame: 'yellow',
                radial: false,
                lifespan: 2000,
                speedX: { min: 200, max: 400 },
                quantity: 4,
                gravityY: -50,
                scale: { start: 0.6, end: 0, ease: 'Power3' },
                emitZone: { type: 'edge', source: trajectory, quantity: 48, yoyo: false },
                blendMode: 'ADD',
                on: false
            });

        }

    }

}

export default new Fireball();