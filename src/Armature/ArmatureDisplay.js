class ArmatureDisplay {

    constructor(config) {
        this.config = config;
    }

    preload() {
        this.config.scene.load.dragonbone(
            this.config.armature.name,
            this.config.armature.texPng,
            this.config.armature.texJson,
            this.config.armature.skeDbbin,
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
        this.armatureDisplay = this.config.scene.add.armature(this.config.armature.name, this.config.armature.name);

        this._scaleArmature();

        return this.armatureDisplay;
    }

}

export default ArmatureDisplay;