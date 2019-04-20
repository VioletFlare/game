class BaseCharacter {
    
    run(armatureDisplay, velocity, flipX) {
        armatureDisplay.body.setVelocityX(velocity)
        armatureDisplay.armature.flipX = flipX;
    }

    idle(armatureDisplay) {
        armatureDisplay.body.setVelocityX(0);
    }

    playAnimation(armatureDisplay, name) {
        if (armatureDisplay.animation.lastAnimationName !== name) {
            armatureDisplay.armature.animation.play(name);
        }
    }

}

export default BaseCharacter;