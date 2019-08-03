class Spell {
    
    constructor() {

    }

    preload(scene) {
        this.scene = scene;
        this.spellContainer = "";
    }

    create(atlasName, emitterConfiguration) {
        const particles = this.scene.add.particles(atlasName);
        this.emitter = particles.createEmitter(emitterConfiguration);
    }

    cast(user, target) {

        if (target) {
            const trajectory = new Phaser.Geom.Line(user.x, user.y, target.x, target.y),
            posY = user.y + user.list[24].y,
            posX = user.x + user.list[24].x;
            this.emitter.setPosition(posX, posY);

            this.emitter.start();
            //use pool
        }

    }

}

export default Spell;