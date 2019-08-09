import Marker from '../UI/Marker';
import Fireball from '../Ability/Spell/Fireball';

class BaseScene extends Phaser.Scene  {

    _preloadPlugins() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);
    }

    _preloadAbilities() {
        this.abilities.fireball.preload();
    }

    _initAbilities() {
        this.abilities = {};
        this.abilities.fireball = new Fireball(this);
    }

    preload() {
        this._initAbilities();
        this._preloadAbilities();
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