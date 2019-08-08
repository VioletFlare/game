class Projectile {

    constructor(user, target, effect) {
        this.user = user;
        this.target = target;
        this.effect = effect;
        this.armatureSlotImageNumber = 24;
        this.originPos = this._getOriginPosFromArmatureSlot();
        this.targetPos = this._getTargetPos();
        this.rotation = 2.9 + Phaser.Math.Angle.Between(this.originPos.x, this.originPos.y, this.targetPos.x, this.targetPos.y);
        this.speed = 150;
    }

    _getTargetPos() {
        return new Phaser.Math.Vector2(this.target.body.center.x, this.target.body.center.y);
    }

    create() {
        this.effect.create(this.originPos);
        this.effect.container.setRotation(this.rotation);

        this._setEffectContainerTargetOverlap();
    }

    _setEffectContainerTargetOverlap() {
        this.scene.physics.add.overlap(
            this.target, 
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
        this.scene.physics.moveToObject(this.container, this.targetPos, this.speed);
    }

}

export default Projectile;