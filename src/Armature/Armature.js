class Armature {

    constructor(config) {
        this.config = config;
    }

    preload() {
        this.config.scene.load.dragonbone(
            this.config.skin.armature.name,
            this.config.skin.armature.texPng,
            this.config.skin.armature.texJson,
            this.config.skin.armature.skeDbbin,
            null,
            null,
            { responseType: "arraybuffer" }
        );
    }

    _scaleArmature() {
        this.armatureDisplay.scaleX = this.config.scale;
        this.armatureDisplay.scaleY = this.config.scale;
    }

    create() {
        this.armatureDisplay = this.config.scene.add.armature(this.config.skin.armature.name, this.config.skin.armature.name);

        this._scaleArmature();

        return this.armatureDisplay;
    }

}

export default Armature;