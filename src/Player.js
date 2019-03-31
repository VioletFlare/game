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
            spawn: playerSpawn,
            scale: 0.45
        }

        this.player = super.create(config);

        this.player.body.setBounce(0, 0.4);
        this.player.body.collideWorldBounds = true;

        return this.player;
    }

    _run(velocity, flipX) {
        this.player.body.setVelocityX(velocity)
        this.player.armature.flipX = flipX;

        if (this.player.animation.lastAnimationName !== "run_0") {
            this.player.armature.animation.play("run_0");
        }
    }

    _idle() {
        this.player.body.setVelocityX(0);

        if (this.player.animation.lastAnimationName !== "idle_0") {
            this.player.armature.animation.play("idle_0");
        }
    }

    _jump() {
        this.player.body.setVelocityY(-280);
    }

    update() {

        if (this.cursors.right.isDown) {
            this._run(160, false)
        } else if (this.cursors.left.isDown) {
            this._run(-160, true);
        } else if (!this.player.body.isMoving && this.player.body.touching.down) {
            this._idle();
        }
    
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this._jump();
        }

    }


}

export default new Player();