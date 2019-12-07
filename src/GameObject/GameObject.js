import ArmatureFactory from '../Armature/ArmatureFactory'

class GameObject extends Phaser.GameObjects.GameObject {

    constructor(config) {
        super(config.scene);
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
        this.config.scene.marker.set(this);
        ev.stopPropagation();
    }

    _setEvents() {
        this.interactiveZone.on('pointerdown', this._focusObject, this);
    }

    _createArmatureDisplay() {
        const armatureDisplay = this.armature.create();
        this.armatureDisplay = this.config.scene.physics.add.existing(armatureDisplay);
    }

    applyEffect(user, effect) {
        $G.emit("GameObject::appliedEffect", {
            user: user, 
            effect: effect, 
            target: this
        })
    }

    preload() {
        this.armature = ArmatureFactory.create(this.config);
        this.armature.preload();
    }

    getSpellOriginPos() {
        const originalSlotImageRelativeX = this.armatureDisplay.list[this.config.skin.spellOriginSlotNumber].x,
              originalSlotImageRelativeY = this.armatureDisplay.list[this.config.skin.spellOriginSlotNumber].y,
              scaledSlotImageRelativeX = originalSlotImageRelativeX * this.armatureDisplay.scaleX,
              scaledSlotImageRelativeY = originalSlotImageRelativeY * this.armatureDisplay.scaleY,
              x = this.armatureDisplay.x + scaledSlotImageRelativeX,
              y = this.armatureDisplay.y + scaledSlotImageRelativeY;

        return new Phaser.Math.Vector2(x, y);
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