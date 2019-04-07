class BaseCharacter {
    
    run(armatureDisplay, velocity, flipX) {
        armatureDisplay.body.setVelocityX(velocity)
        armatureDisplay.armature.flipX = flipX;
    }

    idle(armatureDisplay) {
        armatureDisplay.body.setVelocityX(0);
    }

}

export default BaseCharacter;