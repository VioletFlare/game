class Spell {
    
    constructor() {

    }

    preload(scene) {
        this.scene = scene;
    }

    create(atlasName, emitterConfiguration) {
        this.particles = this.scene.add.particles(atlasName);
        this.emitter = this.particles.createEmitter(emitterConfiguration);
    }

    getSpellOriginPos(user, armatureSlotImageNumber) {
        const originalSlotImageRelativeX = user.list[armatureSlotImageNumber].x,
              originalSlotImageRelativeY = user.list[armatureSlotImageNumber].y,
              scaledSlotImageRelativeX = originalSlotImageRelativeX * user.scaleX,
              scaledSlotImageRelativeY = originalSlotImageRelativeY * user.scaleY;

        return {
            x: user.x + scaledSlotImageRelativeX,
            y: user.y + scaledSlotImageRelativeY
        }
    }

    getSpellTargetPos(target) {
        return {
            x: target.body.center.x,
            y: target.body.center.y
        }
    }

    getEffectParameters(originPos, targetPos) {
        const originTargetDistance = Phaser.Math.Distance.Between(originPos.x, originPos.y, targetPos.x, targetPos.y);

        return {
            rotation: 2.9 + Phaser.Math.Angle.Between(originPos.x, originPos.y, targetPos.x, targetPos.y),
            duration: originTargetDistance * 5
        }
    }

    createEffect(originPos, targetPos) {
        const effectParameters = this.getEffectParameters(originPos, targetPos),
        effectContainer = this.scene.add.container(originPos.x, originPos.y);

        effectContainer.add(this.particles);
        effectContainer.setPosition(originPos.x, originPos.y);
        effectContainer.setRotation(effectParameters.rotation);

        this.emitter.start();

        this.scene.tweens.add({
            targets: effectContainer,
            x: targetPos.x, 
            y: targetPos.y,
            ease: 'Linear',
            duration: effectParameters.duration
        });
    }

    cast(user, target) {

        if (target) {
           const originPos = this.getSpellOriginPos(user, 24),
            targetPos = this.getSpellTargetPos(target);

            this.createEffect(originPos, targetPos);
        }

    }

}

export default Spell;