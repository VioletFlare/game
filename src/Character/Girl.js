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

}

export default new Girl();