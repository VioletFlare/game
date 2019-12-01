import texPng from '../../../assets/flares/flares_tex.png';
import texJson from '../../../assets/flares/flares_tex.json';
import icon from '../../../assets/icon/fireball_icon.png';

class ExplodingFireball {

    constructor(scene) {
        this.emitterConfiguration = {
            frame: 'yellow',
            radial: false,
            lifespan: 1000,
            speedX: { min: 50, max: 120 },
            quantity: 1,
            gravityY: 0,
            scale: { start: 0.4, end: 0.2, ease: 'Power3' },
            blendMode: 'ADD',
            on: false
        };
        this.physicConfiguration = {
            width: 25,
            height: 25,
            offsetX: -14,
            offsetY: -14,
            rotationOffset: 2.9,
            speed: 150,
            launchTimeOffset: 50,
            explosionWidth: 100,
            explosionHeight: 100
        };
        this.animationName = 'cast_0';
        this.atlasName = 'flares';
        this.id = 'exploding_fireball';
        this.name = 'Exploding Fireball';
        this.description = "When mages get bored of regular fireballs.";
        this.dmg = 15;
        this.dmgType = 'fire';
        this.icon = icon;
        this.isSpell = true;
        this.isRanged = true;
        this.isAoE = true;
        this.scene = scene;
    }

    preload() {
        this.scene.load.atlas(this.atlasName, texPng, texJson);
    }

}

export default ExplodingFireball;