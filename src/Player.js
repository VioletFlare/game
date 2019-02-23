import tex_png from '../assets/girl/dbbin/girl_tex.png';
import tex_json from '../assets/girl/dbbin/girl_tex.json';
import ske_dbbin from '../assets/girl/dbbin/girl_ske.dbbin';

class Player {

    preload(context) {

    }

    create(context, x, y) {
        context.load.dragonbone(
            "girl",
            tex_png,
            tex_json,
            ske_dbbin,
            null,
            null,
            { responseType: "arraybuffer" }
        );

        console.log(tex_png, tex_json, ske_dbbin);
        
        const armatureDisplay = context.add.armature("player", "girl");
        console.log(armatureDisplay);

        armatureDisplay.x = context.cameras.main.centerX;           // set position
        armatureDisplay.y = context.cameras.main.centerY + 200;
        //context.player.setBounce(0.2);
        //context.player.setCollideWorldBounds(true);
    }

    update(context) {

    }


}

export default new Player();