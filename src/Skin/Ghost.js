import texPng from "../../assets/ghost/ghost_tex.png";
import texJson from "../../assets/ghost/ghost_tex.json";
import skeDbbin from "../../assets/ghost/ghost_ske.dbbin";
import BaseSkin from "./BaseSkin";

class Ghost extends BaseSkin {

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
        super.playAnimation("run_0");
    }

    create(armatureDisplay) {
        this._createPhysics(armatureDisplay);
    }

}

export default new Ghost();