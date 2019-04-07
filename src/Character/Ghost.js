import texPng from "../../assets/ghost/ghost_tex.png";
import texJson from "../../assets/ghost/ghost_tex.json";
import skeDbbin from "../../assets/ghost/ghost_ske.dbbin";
import BaseCharacter from "./BaseCharacter";

class Ghost extends BaseCharacter {

    constructor() {
        super();

        this.armature = {
            name: "ghost",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }
    }

    _createPhysics(armatureDisplay) {
        armatureDisplay.body.setBounce(0);
        armatureDisplay.body.collideWorldBounds = true;
    }

    run(armatureDisplay, velocity, flipX) {
        super.run(armatureDisplay, velocity, flipX);

        if (armatureDisplay.animation.lastAnimationName !== "run_0") {
            armatureDisplay.armature.animation.play("run_0");
        }
    }

    create(armatureDisplay) {
        this._createPhysics(armatureDisplay);
    }

}

export default new Ghost();