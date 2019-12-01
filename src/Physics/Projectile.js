class Projectile {

    constructor(user, target, effect) {
        this.user = user;
        this.target = target;
        this.effect = effect;
    }

    _initParameters() {
        this.originPos = this.user.getSpellOriginPos();
        this.targetPos = this.target.armatureDisplay.body.center;
        this.rotation = this.effect.config.physicConfiguration.rotationOffset + 
                        Phaser.Math.Angle.Between(this.originPos.x, this.originPos.y, this.targetPos.x, this.targetPos.y);
    }

    _setupEffect() {
        this.effect.create(this.originPos);
        this.effect.container.setRotation(this.rotation);
    }

    _onProjectileHitTarget() {
        this.target.applyEffect(this.user, this.effect);
        this.effect.container.destroy();
    }

    _setOverlapTarget() {
        this.effect.scene.physics.add.overlap(
            this.target.armatureDisplay, 
            this.effect.container, 
            () => this._onProjectileHitTarget(), 
            null, 
            this.effect.scene
        );
    }

    launch() {
        setTimeout(
            () => {
                this._initParameters();
                this._setupEffect();
                this._setOverlapTarget();
                this.effect.scene.physics.moveToObject(this.effect.container, this.targetPos, this.effect.config.physicConfiguration.speed)
            },
            this.effect.config.physicConfiguration.launchTimeOffset
        );
    }

}

export default Projectile;