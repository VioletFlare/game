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

    cast(user, target) {

        if (target) {
           const originPosY = user.y + (user.list[24].y * user.scaleY),
            originPosX = user.x + (user.list[24].x * user.scaleX),
            targetPosY = target.body.center.y,
            targetPosX = target.body.center.x,
            originTargetDistance = Phaser.Math.Distance.Between(originPosX, originPosY, targetPosX, targetPosY),
            angleRad = Phaser.Math.Angle.Between(originPosX, originPosY, targetPosX, targetPosY),
            angleDeg = Phaser.Math.RadToDeg(angleRad),
            duration = originTargetDistance * 5,
            container = 

            this.particles.setPosition(originPosX, originPosY);
            this.particles.setAngle(angleDeg);

            this.emitter.start();

            this.scene.tweens.add({
                targets: this.particles,
                x: targetPosX, 
                y: targetPosY,
                ease: 'Linear',
                duration: duration
            });

            //use pool
        }

    }

}

export default Spell;