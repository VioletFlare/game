import GameObject from "../GameObject/GameObject";

class Player extends GameObject {

    constructor(config) {
        super(config);
    }

    _run(velocity, flipX) {
        this.armatureDisplay.body.setVelocityX(velocity)
        this.armatureDisplay.armature.flipX = flipX;

        if (this.armatureDisplay.animation.lastAnimationName !== "run_0") {
            this.armatureDisplay.armature.animation.play("run_0");
        }
    }

    _idle() {
        this.armatureDisplay.body.setVelocityX(0);

        if (this.armatureDisplay.animation.lastAnimationName !== "idle_0") {
            this.armatureDisplay.armature.animation.play("idle_0");
        }
    }

    _jump() {
        this.armatureDisplay.body.setVelocityY(-280);
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
            this._run(160, false)
        } else if (this.cursors.left.isDown) {
            this._run(-160, true);
        } else if (!this.armatureDisplay.body.isMoving && this.armatureDisplay.body.touching.down) {
            this._idle();
        }
    
        if (this.cursors.up.isDown && this.armatureDisplay.body.touching.down) {
            this._jump();
        }

    }


}

export default Player;