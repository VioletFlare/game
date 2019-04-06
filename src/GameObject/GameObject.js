import ArmatureFactory from '../Armature/ArmatureFactory'

class GameObject {

    constructor(config) {
        this.config = config;
    }

    _setDimensions() {
        const width = this.armatureDisplay.armature.armatureData.canvas.width,
              height = this.armatureDisplay.armature.armatureData.canvas.height,
              offsetX = - width / 2,
              offsetY = - height;
  
        this.armatureDisplay.body.setSize(width, height);
        this.armatureDisplay.body.offset.set(offsetX, offsetY);
    }

    _setSpawn(spawnPoint) {
        this.armatureDisplay.x = spawnPoint[0].x;
        this.armatureDisplay.y = spawnPoint[0].y;
    }

    preload() {
        this.armature = ArmatureFactory.create(this.config);
        this.armature.preload();
    }

    create(spawn) {
        const armatureDisplay = this.armature.create();
        
        this.armatureDisplay = this.config.scene.physics.add.existing(armatureDisplay);

        this._setDimensions();
        this._setSpawn(spawn);
    }

}

export default GameObject;