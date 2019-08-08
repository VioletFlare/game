
import texPng from '../../assets/gems/gems_tex.png';
import texJson from '../../assets/gems/gems_tex.json';

class Marker {

    constructor(scene) {
        this.scene = scene;
    }

    preload() {
        this.scene.load.atlas('gems', texPng, texJson);
    }

    create() {
        this.scene.anims.create({ 
            key: 'prism', 
            frames: this.scene.anims.generateFrameNames('gems', { 
                prefix: 'prism_', 
                end: 6, zeroPad: 4 
            }), 
            repeat: -1 
        });
    }

    _removePreviousMarker() {
        if (this.scene.focusedGameObject.armatureDisplay) {
            const child = this.scene.armatureDisplay.getByName("marker");
            this.scene.focusedGameObject.armatureDisplay.remove(child, true);
            this.scene.focusedGameObject.armatureDisplay = null;
        }
    }

    _createNewMarker() {
        const height = -(this.scene.focusedGameObject.armatureDisplay.armature.armatureData.canvas.height + 80);
        const gems = this.scene.add.sprite(0, height, 'gems');

        gems.setName("marker");
        gems.play('prism');

        this.scene.focusedGameObject.armatureDisplay.add(gems);
    }

    set(gameObject) {
        this._removePreviousMarker();

        this.scene.focusedGameObject = gameObject;

        this._createNewMarker();
    }

    unset() {
        this._removePreviousMarker();
    }

}

export default Marker;