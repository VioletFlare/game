class Projectile {

    constructor(user, target, effect) {
        this.user = user;
        this.target = target;
        this.effect = effect;
    }

    _initParameters() {
        this.originPos = this.user.getSpellOriginPos();
        this.targetPos = this.target.armatureDisplay.body.center;
        this.rotation = this._calculateProjectileRotation();
    }

    _calculateProjectileRotation() {
        const angleBetweenOriginAndTarget = Phaser.Math.Angle.Between(
            this.originPos.x, 
            this.originPos.y, 
            this.targetPos.x, 
            this.targetPos.y
        ),
        rotation = this.effect.config.physicConfiguration.rotationOffset + angleBetweenOriginAndTarget;

        return rotation;
    }

    _setupEffect() {
        this.effect.create(this.originPos);
        this.effect.container.setRotation(this.rotation);
    }

    _handlePostImpactEffect() {
        /*const isExplosive = 

        if ()*/
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

    _onReadyToLaunch() {
        this._initParameters();
        this._setupEffect();
        this._setOverlapTarget();
        this.effect.scene.physics.moveToObject(this.effect.container, this.targetPos, this.effect.config.physicConfiguration.speed)
    }

    launch() {
        setTimeout(
            () => this._onReadyToLaunch(),
            this.effect.config.physicConfiguration.launchTimeOffset
        );
    }

}

export default Projectile;