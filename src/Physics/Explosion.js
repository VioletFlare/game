class Explosion {

    constructor(position, effect) {
        this.position = position;
        this.effect = effect;

        this._createZone();
        this._createPhysics();
    }

    _createZone() {
        this.explosionZone = this.effect.scene.add.zone(
            this.position.x, 
            this.position.y,
            this.effect.config.physicConfiguration.explosionWidth,
            this.effect.config.physicConfiguration.explosionHeight
        );
    }

    _createPhysics() {
        this.effect.scene.physics.world.enable(this.explosionZone, 0);
        this.explosionZone.body.setAllowGravity(false);
        this.explosionZone.bodymoves = false;
    }

    _setEvents() {
        this.explosionZone.on('enterzone', () => {
            console.log("test");
        })
    }

}

export default Explosion;