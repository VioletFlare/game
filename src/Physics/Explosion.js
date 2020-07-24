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
            this.effect.config.AoEEffect.physicConfiguration.width,
            this.effect.config.AoEEffect.physicConfiguration.height
        );
    }

    _addExplosionCollisionOverlap() {
        this.explosionOverlap = this.effect.scene.physics.add.overlap(
            this.effect.scene.charactersOverlapArr, 
            this.explosionZone,
            () => this._onExplosionHit()
        );
    }

    _createPhysics() {
        this.effect.scene.physics.world.enable(this.explosionZone, 0);
        this.explosionZone.body.setAllowGravity(false);
        this.explosionZone.bodymoves = false;
        this._addExplosionCollisionOverlap();
    }

    _onExplosionHit() {
        console.log("test");
        this.explosionOverlap.destroy();

        setTimeout(
            () => this.explosionZone.destroy(), 
        400);
    }

}

export default Explosion;