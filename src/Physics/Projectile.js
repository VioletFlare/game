class Projectile {

    constructor(user, target, effect) {
        this.user = user;
        this.target = target;
        this.effect = effect;
    }

    _initParameters() {
        this.originPos = this.user.getSpellOriginPos();
        this.targetPos = this.target.armatureDisplay.body.center;
        this.rotation = this.effect.physicConfiguration.rotationOffset + 
                        Phaser.Math.Angle.Between(this.originPos.x, this.originPos.y, this.targetPos.x, this.targetPos.y);
    }

    _setupEffect() {
        this.effect.create(this.originPos);
        this.effect.container.setRotation(this.rotation);
    }

    _setOverlapTarget() {
        this.effect.scene.physics.add.overlap(
            this.target.armatureDisplay, 
            this.effect.container, 
            () => { 
                console.log("Projectile Hit!"); 
                this.effect.container.destroy();
            }, 
            null, 
            this.effect.scene
        );
    }

    launch() {
        this._initParameters();
        this._setupEffect();
        this._setOverlapTarget();

        this.effect.scene.physics.moveToObject(this.effect.container, this.targetPos, this.effect.physicConfiguration.speed);
    }

}

export default Projectile;