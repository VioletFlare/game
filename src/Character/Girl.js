import texPng from "../../assets/girl/girl_tex.png";
import texJson from "../../assets/girl/girl_tex.json";
import skeDbbin from "../../assets/girl/girl_ske.dbbin";
import BaseCharacter from "./BaseCharacter";

class Girl extends BaseCharacter {

    constructor() {
        super();

        this.armature = {
            name: "girl",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }
    }

    idle(armatureDisplay) {
        super.idle(armatureDisplay);
        super.playAnimation(armatureDisplay, "idle_0");
    }

    cast(armatureDisplay) {
        super.playAnimation(armatureDisplay, "cast_0");
    }

    run(armatureDisplay, velocity, flipX) {
        super.run(armatureDisplay, velocity, flipX);
        super.playAnimation(armatureDisplay, "run_0");
    }

}

export default new Girl();