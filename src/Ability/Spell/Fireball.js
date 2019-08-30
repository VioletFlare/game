import texPng from '../../../assets/flares/flares_tex.png';
import texJson from '../../../assets/flares/flares_tex.json';
import icon from '../../../assets/icon/fireball_icon.png';

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
            offsetY: -8,
            rotationOffset: 2.9,
            speed: 150,
            launchTimeOffset: 50
        };
        this.animationName = 'cast_0';
        this.atlasName = 'flares';
        this.id = 'fireball';
        this.name = 'Fireball';
        this.description = "A well known trick among most magic users.";
        this.dmg = 15;
        this.dmgType = 'fire';
        this.icon = icon;
        this.isSpell = true;
        this.isRanged = true;
        this.scene = scene;
    }

    preload() {
        this.scene.load.atlas(this.atlasName, texPng, texJson);
    }

}

export default Fireball;