import texPng from "../../assets/girl/girl_tex.png";
import texJson from "../../assets/girl/girl_tex.json";
import skeDbbin from "../../assets/girl/girl_ske.dbbin";

class Girl {

    constructor() {
        this.armature = {
            name: "girl",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }
    }

    idle(armatureDisplay) {
        if (armatureDisplay.animation.lastAnimationName !== "idle_0") {
            armatureDisplay.armature.animation.play("idle_0");
        }
    }

    run(armatureDisplay) {
        if (armatureDisplay.animation.lastAnimationName !== "run_0") {
            armatureDisplay.armature.animation.play("run_0");
        }
    }

}

export default new Girl();