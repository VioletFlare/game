import GameObject from "./GameObject";

import texPng from "../assets/girl/girl_tex.png";
import texJson from "../assets/girl/girl_tex.json";
import skeDbbin from "../assets/girl/girl_ske.dbbin";

class Player extends GameObject {

    preload(scene) {
        const armature = {
            name: "girl",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }

        super.preload(scene, armature);

        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    create(playerSpawn) {
        const config = {
            height: 148,
            width: 64,
            spawn: playerSpawn
        }

        this.player = super.create(config);

        this.player.body.setBounce(0, 0.4);
        this.player.body.collideWorldBounds = true;

        return this.player;
    }

    _runRight() {
        this.player.body.setVelocityX(160);
        this.player.armature.flipX = false;
    }

    _runLeft(){
        this.player.body.setVelocityX(-160)
        this.player.armature.flipX = true;
    }

    _idle() {
        this.player.body.setVelocityX(0);

        if (!this.player.animation.isPlaying) {
            this.player.armature.animation.play("idle_animation_0");
        }
    }

    _jump() {
        this.player.body.setVelocityY(-280);
    }

    update() {

        if (this.cursors.right.isDown) {
            this._runRight()
        }
        else if (this.cursors.left.isDown) {
            this._runLeft();
        }
        else if (!this.player.body.isMoving && this.player.body.touching.down) {
            this._idle();
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this._jump();
        }

    }


}

export default new Player();