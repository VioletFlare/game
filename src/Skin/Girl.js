import texPng from "../../assets/girl/girl_tex.png";
import texJson from "../../assets/girl/girl_tex.json";
import skeDbbin from "../../assets/girl/girl_ske.dbbin";
import BaseSkin from "./BaseSkin";

class Girl extends BaseSkin {

    constructor() {
        super();

        this.armature = {
            name: "girl",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }

        this.spellOriginSlotNumber = 24;
    }

    idle(armatureDisplay) {
        super.idle(armatureDisplay);
        super.playAnimation(armatureDisplay, "idle_0");
    }

    cast(armatureDisplay) {
        super.playAnimationOnce(armatureDisplay, "cast_0");
    }

    run(armatureDisplay, velocity, flipX) {
        super.run(armatureDisplay, velocity, flipX);
        super.playAnimation(armatureDisplay, "run_0");
    }

}

export default new Girl();