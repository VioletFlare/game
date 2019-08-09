import GameObject from "../GameObject/GameObject";
import Projectile from '../Physics/Projectile';
import Effect from "../Effect/Effect";

class Player extends GameObject {

    constructor(config) {
        super(config);
    }

    _run(velocity, flipX) {
        this.config.skin.run(this.armatureDisplay, velocity, flipX);
    }

    _idle() {
        this.config.skin.idle(this.armatureDisplay);
    }

    _jump() {
        this.armatureDisplay.body.setVelocityY(-this.config.jumpVelocity);
    }

    preload() {
        super.preload();
        this.cursors = this.config.scene.input.keyboard.createCursorKeys();
        Fireball.preload(this.config.scene);
    }

    create(playerSpawn) {
        super.create(playerSpawn);

        this.armatureDisplay.body.setBounce(0, 0.4);
        this.armatureDisplay.body.collideWorldBounds = true;

        this._createKeyCommands();
    }

    _useAbility() {
        if (this.config.scene.focusedGameObject) {
            const effect = new Effect(this.scene.ability.fireball),
                projectile = new Projectile(this, this.config.scene.focusedGameObject, effect);

            setTimeout(
                () => projectile.launch(), 50
            );
            
            this.config.skin.cast(this.armatureDisplay);
        }
    }

    _createKeyCommands() {
        var spaceKey = this.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        spaceKey.on('down', () => {
            this._useAbility();
        });
    }

    update() {
        const isTouchingDown = this.armatureDisplay.body.touching.down,
              isNotCasting = !(this.armatureDisplay.animation.lastAnimationName == "cast_0" && this.armatureDisplay.armature.animation.isPlaying),
              isNotCursorDown = !(this.cursors.right.isDown || this.cursors.left.isDown || this.cursors.up.isDown),
              isIdle = isTouchingDown && isNotCasting && isNotCursorDown;

        if (this.cursors.right.isDown) {
            this._run(this.config.runVelocity, false)
        } else if (this.cursors.left.isDown) {
            this._run(-this.config.runVelocity, true);
        } else if (isIdle) {
            this._idle();
        }
    
        if (this.cursors.up.isDown && this.armatureDisplay.body.touching.down) {
            this._jump();
        }
    }


}

export default Player;