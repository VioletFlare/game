import GameObject from './GameObject';

import texPng from "../assets/ghost/ghost_tex.png";
import texJson from "../assets/ghost/ghost_tex.json";
import skeDbbin from "../assets/ghost/ghost_ske.dbbin";

class Npc extends GameObject {
    preload(scene) {
        const armature = {
            name: "ghost",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }

        super.preload(scene, armature);
    }


    create(playerSpawn) {
        const config = {
            spawn: playerSpawn,
            scale: 0.45
        }

        this.npc = super.create(config);

        this.npc.body.setBounce(0);

        this.npc.body.collideWorldBounds = true;

        this._patrol();

        return this.npc;
    }

    _run(velocity, flipX) {
        this.npc.body.setVelocityX(velocity)
        this.npc.armature.flipX = flipX;

        if (this.npc.animation.lastAnimationName !== "run_0") {
            this.npc.armature.animation.play("run_0");
        }
    }

    _patrol() {

            setInterval(
                () => {
                    if (this.flipX) {
                        this._run(-160, this.flipX);
                        this.flipX = false;
                    } else {
                        this._run(160, this.flipX)
                        this.flipX = true;
                    }
                }, 2000
            )

    }

    update() {
        
    }

}

export default new Npc();