import ArmatureFactory from '../Armature/ArmatureFactory'

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
        const halfOffsetY = this.offsetY / 2;

        this.interactiveZone = this.config.scene.add.zone(0, halfOffsetY, this.width, this.height);
        this.interactiveZone.setName('interactiveZone');
        this.interactiveZone.setInteractive();
        this.armatureDisplay.add(this.interactiveZone);
    }

    _setSpawn(spawnPoint) {
        this.armatureDisplay.x = spawnPoint[0].x;
        this.armatureDisplay.y = spawnPoint[0].y;
    }


    _focusObject(pointer, x, y, ev) {
        this.config.scene.marker.set(this.armatureDisplay);
        ev.stopPropagation();
    }

    _setEvents() {
        this.interactiveZone.on('pointerdown', this._focusObject, this);
    }

    _createArmatureDisplay() {
        const armatureDisplay = this.armature.create();
        this.armatureDisplay = this.config.scene.physics.add.existing(armatureDisplay);
    }

    preload() {
        this.armature = ArmatureFactory.create(this.config);
        this.armature.preload();
    }

    create(spawn) {
        this._createArmatureDisplay();
        this._calculateDimensions();
        this._setDimensions();
        this._createInteractiveZone();
        this._setSpawn(spawn);
        this._setEvents();
    }

}

export default GameObject;