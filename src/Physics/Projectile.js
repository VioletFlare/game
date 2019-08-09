class Projectile {

    constructor(user, target, effect) {
        this.user = user;
        this.target = target;
        this.effect = effect;
        this.armatureSlotImageNumber = 24;
    }

    _initParameters() {
        this.originPos = user.getOriginPosFromArmatureSlot();
        this.targetPos = target.armatureDisplay.body.center;
        this.rotation = 2.9 + Phaser.Math.Angle.Between(this.originPos.x, this.originPos.y, this.targetPos.x, this.targetPos.y);
        this.speed = 150;
    }

    _setupEffect() {
        this.effect.create(this.originPos);
        this.effect.container.setRotation(this.rotation);
    }

    _setOverlapTarget() {
        this.scene.physics.add.overlap(
            this.target.armatureDisplay, 
            this.effect.container, 
            () => { 
                console.log("Projectile Hit!"); 
                this.effect.container.destroy();
            }, 
            null, 
            this.scene
        );
    }

    launch() {
        this._initParameters();
        this._setupEffect();
        this._setOverlapTarget();

        this.scene.physics.moveToObject(this.container, this.targetPos, this.speed);
    }

}

export default Projectile;