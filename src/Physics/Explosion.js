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
            this.effect.config.physicConfiguration.explosion.width,
            this.effect.config.physicConfiguration.explosion.height
        );
    }

    _createPhysics() {
        this.effect.scene.physics.world.enable(this.explosionZone, 0);
        this.explosionZone.body.setAllowGravity(false);
        this.explosionZone.bodymoves = false;
        this.explosionOverlap = this.effect.scene.physics.add.overlap(
            this.effect.scene.charactersOverlapArr, 
            this.explosionZone,
            () => this._onExplosionHit()
        );
    }

    _onExplosionHit() {
        console.log("test");

        this.explosionZone.destroy();
        this.explosionOverlap.destroy();
    }

}

export default Explosion;