class Spell {
    
    constructor() {

    }

    preload(scene) {
        this.scene = scene;
    }

    create(atlasName, emitterConfiguration, physicConfiguration) {
        this.atlasName = atlasName;
        this.emitterConfiguration = emitterConfiguration;
        this.physicConfiguration = physicConfiguration;
    }

    _getSpellOriginPos(user, armatureSlotImageNumber) {
        const originalSlotImageRelativeX = user.list[armatureSlotImageNumber].x,
              originalSlotImageRelativeY = user.list[armatureSlotImageNumber].y,
              scaledSlotImageRelativeX = originalSlotImageRelativeX * user.scaleX,
              scaledSlotImageRelativeY = originalSlotImageRelativeY * user.scaleY,
              x = user.x + scaledSlotImageRelativeX,
              y = user.y + scaledSlotImageRelativeY;

        return new Phaser.Math.Vector2(x, y);
    }

    _setEffectContainerDimensions(effectContainer) {
        effectContainer.body.setSize(this.physicConfiguration.width, this.physicConfiguration.height);
        effectContainer.body.offset.set(this.physicConfiguration.offsetX, this.physicConfiguration.offsetY);
    }

    _getSpellTargetPos(target) {
        return new Phaser.Math.Vector2(target.body.center.x, target.body.center.y);
    }

    _getEffectParameters(originPos, targetPos) {
        return {
            rotation: 2.9 + Phaser.Math.Angle.Between(originPos.x, originPos.y, targetPos.x, targetPos.y),
            speed: 150
        }
    }

    _setupEffectContainerPhysics(effectContainer) {
        this.scene.physics.world.enable(effectContainer);

        effectContainer.body.allowGravity = false;
        effectContainer.body.allowDrag = false;
    }

    _createEffectContainer(particles, originPos, effectParameters) {
        const effectContainer = this.scene.add.container(originPos.x, originPos.y);

        effectContainer.add(particles);
        effectContainer.setPosition(originPos.x, originPos.y);
        effectContainer.setRotation(effectParameters.rotation);

        return effectContainer;
    }

    _createEmitter(particles) {
        const emitter = particles.createEmitter(this.emitterConfiguration);
        emitter.start();
    }

    _launchProjectileTowardsTarget(targetPos, effectParameters, effectContainer) {
        this.scene.physics.moveToObject(effectContainer, targetPos, effectParameters.speed);
    }

    _setEffectContainerTargetOverlap(target, effectContainer) {
        this.scene.physics.add.overlap(
            target, 
            effectContainer, 
            () => { 
                console.log("Spell Hit!"); 
                effectContainer.destroy();
            }, 
            null, 
            this.scene
        );
    }

    cast(user, target) {

        if (target) {
           const particles = this.scene.add.particles(this.atlasName), 
            originPos = this._getSpellOriginPos(user, 24),
            targetPos = this._getSpellTargetPos(target),
            effectParameters = this._getEffectParameters(originPos, targetPos),
            effectContainer = this._createEffectContainer(particles, originPos, effectParameters);

            this._setupEffectContainerPhysics(effectContainer);
            this._setEffectContainerDimensions(effectContainer);
            this._setEffectContainerTargetOverlap(target, effectContainer);

            this._createEmitter(particles);

            this._launchProjectileTowardsTarget(targetPos, effectParameters, effectContainer);
        }

    }

}

export default Spell;