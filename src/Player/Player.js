import GameObject from "../GameObject/GameObject";
import KeyCommands from "./KeyCommands";

class Player extends GameObject {

    constructor(config) {
        super(config);
        this.abilities = [];
    }

    _run(velocity, flipX) {
        this.config.skin.run(this.armatureDisplay, velocity, flipX);
    }

    _idle() {
        this.config.skin.idle(this.armatureDisplay);
    }

    jump() {
        this.armatureDisplay.body.setVelocityY(-this.config.jumpVelocity);
    }

    preload() {
        super.preload();
        this.cursors = this.config.scene.input.keyboard.createCursorKeys();
    }

    create(playerSpawn) {
        super.create(playerSpawn);

        this.armatureDisplay.body.collideWorldBounds = true;

        KeyCommands.create(this);
    }

    update() {
        KeyCommands.update(this);
    }

}

export default Player;