class Armature {

    constructor(config) {
        this.config = config;
    }

    preload() {
        this.config.scene.load.dragonbone(
            this.config.obj.armature.name,
            this.config.obj.armature.texPng,
            this.config.obj.armature.texJson,
            this.config.obj.armature.skeDbbin,
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
        this.armatureDisplay = this.config.scene.add.armature(this.config.obj.armature.name, this.config.obj.armature.name);

        this._scaleArmature();

        return this.armatureDisplay;
    }

}

export default Armature;