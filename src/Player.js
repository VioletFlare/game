import texPng from "../assets/girl/girl_tex.png";
import texJson from "../assets/girl/girl_tex.json";
import skeDbbin from "../assets/girl/girl_ske.dbbin";

class Player {

    preload(context) {
        context.load.dragonbone(
            "girl",
            texPng,
            texJson,
            skeDbbin,
            null,
            null,
            { responseType: "arraybuffer" }
        );

        this.cursors = context.input.keyboard.createCursorKeys();
    }

    _configureGameObject(gameObject, height, width) {

        gameObject.body.height = height;
        gameObject.body.width = width;

        gameObject.body.offset.set(
            -gameObject.body.halfWidth, 
            -gameObject.body.height
        );
    }

    _setGameObjectSpawn(gameObject, spawnPoint) {
        gameObject.x = spawnPoint[0].x;
        gameObject.y = spawnPoint[0].y;
    }

    create(context, playerSpawn) {
        const armatureDisplay = context.add.armature("girl", "girl");
        armatureDisplay.animation.play("idle_animation_0");
        this.player = context.physics.add.existing(armatureDisplay);

        this._configureGameObject(this.player, 148, 64);
        this._setGameObjectSpawn(this.player, playerSpawn);

        return this.player;
    }

    update() {
        this.player.body.setVelocity(0);
        
        if (this.cursors.left.isDown)  {
            this.player.body.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(300);
        }
    
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-300);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(300);
        }
        
    }


}

export default new Player();