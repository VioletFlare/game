import texPng from "../assets/ghost/ghost_tex.png";
import texJson from "../assets/ghost/ghost_tex.json";
import skeDbbin from "../assets/ghost/ghost_ske.dbbin";

class Ghost {

    constructor() {
        this.armature = {
            name: "ghost",
            texPng: texPng,
            texJson: texJson,
            skeDbbin: skeDbbin
        }
    }

}

export default new Ghost();