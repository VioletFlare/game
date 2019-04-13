import ArmatureFactory from '../Armature/ArmatureFactory'
import Marker from '../UI/Marker';

class GameObject {

    constructor(config) {
        this.config = config;
    }

    _calculateDimensions() {
        this.width = this.armatureDisplay.armature.armatureData.canvas.width,
        this.height = this.armatureDisplay.armature.armatureData.canvas.height,
        this.offsetX = - this.width / 2,
        this.offsetY = - this.height;
    }

    _setDimensions() {
        this.armatureDisplay.body.setSize(this.width, this.height);
        this.armatureDisplay.body.offset.set(this.offsetX, this.offsetY);
    }

    _createInteractiveZone() {
        const halfOffestY = this.offsetY / 2;

        this.interactiveZone = this.config.scene.add.zone(0, halfOffestY, this.width, this.height);
        this.interactiveZone.setName('interactiveZone');
        this.interactiveZone.setInteractive();
        this.armatureDisplay.add(this.interactiveZone);
    }

    _setSpawn(spawnPoint) {
        this.armatureDisplay.x = spawnPoint[0].x;
        this.armatureDisplay.y = spawnPoint[0].y;
    }


    _focusObject() {
        this.marker.set(this.armatureDisplay);
    }

    _unFocusObject() {
        this.marker.unset();
    }

    _setEvents() {
        this.interactiveZone.on('pointerdown', this._focusObject, this);
        
        this.config.scene.input.on('pointerdown', this._unFocusObject, this);
    }

    _createArmatureDisplay() {
        const armatureDisplay = this.armature.create();
        this.armatureDisplay = this.config.scene.physics.add.existing(armatureDisplay);
    }

    preload() {
        this.armature = ArmatureFactory.create(this.config);
        this.armature.preload();
        this.marker = new Marker(this.config.scene);
        this.marker.preload();
    }

    create(spawn) {
        this._createArmatureDisplay();
        this.marker.create();
        this._calculateDimensions();
        this._setDimensions();
        this._createInteractiveZone();
        this._setSpawn(spawn);
        this._setEvents();
    }

}

export default GameObject;