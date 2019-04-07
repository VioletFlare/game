class BaseScene extends Phaser.Scene  {

    _preloadPlugins() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);
    }

    preload() {
        this._preloadPlugins();
    }

}

export default BaseScene;