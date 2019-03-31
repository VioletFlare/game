class GameObject {

    _createArmature(scale) {
        const armatureDisplay = this.scene.add.armature(this.armature.name, this.armature.name);

        armatureDisplay.scaleX = scale;
        armatureDisplay.scaleY = scale;

        return armatureDisplay;
    }

    _setDimensions(gameObject) {
        const width = gameObject.armature.armatureData.canvas.width,
              height = gameObject.armature.armatureData.canvas.height,
              offsetX = - width / 2,
              offsetY = - height;
  
        gameObject.body.setSize(width, height);
        gameObject.body.offset.set(offsetX, offsetY);
    }

    _setSpawn(gameObject, spawnPoint) {
        gameObject.x = spawnPoint[0].x;
        gameObject.y = spawnPoint[0].y;
    }

    preload(scene, armature) {
        this.scene = scene;
        this.armature = armature;

        scene.load.dragonbone(
            this.armature.name,
            this.armature.texPng,
            this.armature.texJson,
            this.armature.skeDbbin,
            null,
            null,
            { responseType: "arraybuffer" }
        );
    }

    create(config) {
        const armatureDisplay = this._createArmature(config.scale),
              gameObject = this.scene.physics.add.existing(armatureDisplay);

        this._setDimensions(gameObject);
        this._setSpawn(gameObject, config.spawn);

        return gameObject;
    }

}

export default GameObject;