import GameObject from "../GameObject/GameObject";

class Player extends GameObject {

    constructor(config) {
        super(config);
    }

    _run(velocity, flipX) {
        this.config.character.run(this.armatureDisplay);

        this.armatureDisplay.body.setVelocityX(velocity)
        this.armatureDisplay.armature.flipX = flipX;
    }

    _idle() {
        this.config.character.idle(this.armatureDisplay);

        this.armatureDisplay.body.setVelocityX(0);
    }

    _jump() {
        this.armatureDisplay.body.setVelocityY(-this.config.jumpVelocity);
    }

    preload() {
        super.preload();
        this.cursors = this.config.scene.input.keyboard.createCursorKeys();
    }

    create(playerSpawn) {
        super.create(playerSpawn);

        this.armatureDisplay.body.setBounce(0, 0.4);
        this.armatureDisplay.body.collideWorldBounds = true;
    }

    update() {

        if (this.cursors.right.isDown) {
            this._run(this.config.runVelocity, false)
        } else if (this.cursors.left.isDown) {
            this._run(-this.config.runVelocity, true);
        } else if (!this.armatureDisplay.body.isMoving && this.armatureDisplay.body.touching.down) {
            this._idle();
        }
    
        if (this.cursors.up.isDown && this.armatureDisplay.body.touching.down) {
            this._jump();
        }

    }


}

export default Player;