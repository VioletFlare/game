class GameObject {

    _setDimensions(gameObject, height, width) {
        gameObject.body.height = height;
        gameObject.body.width = width;

        gameObject.body.offset.set(
            -gameObject.body.halfWidth, 
            -gameObject.body.height
        );
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
        const armatureDisplay = this.scene.add.armature(this.armature.name, this.armature.name),
            gameObject = this.scene.physics.add.existing(armatureDisplay);

        this._setDimensions(gameObject, config.height, config.width);
        this._setSpawn(gameObject, config.spawn);

        return gameObject;
    }

}

export default GameObject;