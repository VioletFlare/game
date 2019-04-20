import Marker from '../UI/Marker';

class BaseScene extends Phaser.Scene  {

    _preloadPlugins() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);
    }

    preload() {
        this._preloadPlugins();
        this.marker = new Marker(this);
        this.marker.preload();
    }

    _unFocusObject() {
        this.marker.unset();
    }

    _setEvents() {
        this.input.on('pointerdown', this._unFocusObject, this);
    }

    create() {
        this.marker.create();
        this._setEvents();
    }

}

export default BaseScene;