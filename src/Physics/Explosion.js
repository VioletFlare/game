class Explosion {

    constructor(position, effect) {
        this.position = position;
        this.effect = effect;

        this._createZone();
        this._createPhysics();
    }

    _createZone() {
        this.explosionZone = this.effect.scene.make.zone({
            x: this.position.x, 
            y: this.position.y,
            width: this.effect.config.AoEEffect.physicConfiguration.width,
            height: this.effect.config.AoEEffect.physicConfiguration.height
        });
    }

    _addExplosionCollisionOverlap() {
        this.explosionOverlap = this.effect.scene.physics.add.overlap(
            this.effect.scene.charactersOverlapArr, 
            this.explosionZone,
            () => this._onExplosionHit()
        );
    }

    _createPhysics() {
        this.explosionZone.bodymoves = false;
        this.effect.scene.physics.world.enable(this.explosionZone, 1);
        
        this._addExplosionCollisionOverlap();
    }

    _stopExplosion() {
        this.explosionOverlap.destroy();

        setTimeout(
            () => this.explosionZone.destroy(), 400
        );
    }

    _onExplosionHit() {
        if (this.explosionOverlap.active) {
            this._stopExplosion();
        }
    }

}

export default Explosion;