
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
        if (this.scene.focusedArmatureDisplay) {
            const child = this.scene.focusedArmatureDisplay.getByName("marker");
            this.scene.focusedArmatureDisplay.remove(child, true);
            this.scene.focusedArmatureDisplay = null;
        }
    }

    _createNewMarker() {
        const height = -(this.scene.focusedArmatureDisplay.armature.armatureData.canvas.height + 80);
        const gems = this.scene.add.sprite(0, height, 'gems');

        gems.setName("marker");
        gems.play('prism');

        this.scene.focusedArmatureDisplay.add(gems);
    }

    set(armatureDisplay) {
        this._removePreviousMarker();

        this.scene.focusedArmatureDisplay = armatureDisplay;

        this._createNewMarker();
    }

    unset() {
        this._removePreviousMarker();
    }

}

export default Marker;