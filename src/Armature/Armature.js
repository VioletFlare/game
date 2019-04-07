class Armature {

    constructor(config) {
        this.config = config;
    }

    preload() {
        this.config.scene.load.dragonbone(
            this.config.character.armature.name,
            this.config.character.armature.texPng,
            this.config.character.armature.texJson,
            this.config.character.armature.skeDbbin,
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
        this.armatureDisplay = this.config.scene.add.armature(this.config.character.armature.name, this.config.character.armature.name);

        this._scaleArmature();

        return this.armatureDisplay;
    }

}

export default Armature;