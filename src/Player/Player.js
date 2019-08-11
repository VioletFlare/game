import GameObject from "../GameObject/GameObject";
import Projectile from '../Physics/Projectile';
import Effect from "../Effect/Effect";

class Player extends GameObject {

    constructor(config) {
        super(config);
        this.isNotIdleAnimationBlocked = true;
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
    }

    create(playerSpawn) {
        super.create(playerSpawn);

        this.armatureDisplay.body.collideWorldBounds = true;

        this._createKeyCommands();
    }

    _useSpell() {
        const effect = new Effect(this.config.scene.abilities.fireball),
        projectile = new Projectile(this, this.config.scene.focusedGameObject, effect);

        setTimeout(
            () => projectile.launch(), 50
        );

        this.config.skin.throwSpell(this.armatureDisplay);

        setTimeout(
            () => this.isNotIdleAnimationBlocked = true, 700
        );
    }

    _useAbility(abilityConfig) {
        this.isNotIdleAnimationBlocked = false;

        if (abilityConfig.isSpell) {
            this._useSpell(abilityConfig.spellConfig);
        } else if (abilityConfig.isRanged) {

        } else if (abilityConfig.isMeele) {

        }
    }

    _createKeyCommands() {
        const spaceKey = this.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            upKey = this.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        spaceKey.on('down', 
            () => this.isNotMoving  ? this._useAbility({
                isSpell: true,
                isRanged: true,
                isMeele: false,
                spellConfig: {
                    user: this,
                    target: this.config.scene.focusedGameObject
                }
            }): 0
        );

        upKey.on('down', 
            () => this.armatureDisplay.body.touching.down ? this._jump(): 0
        )
    }

    update() {
        this.isNotMoving = !(this.cursors.right.isDown || this.cursors.left.isDown || this.cursors.up.isDown) && this.armatureDisplay.body.touching.down,
        this.isIdle = this.isNotIdleAnimationBlocked && this.isNotMoving;

        if (this.isIdle) {
            this._idle();
        } else {
            if (this.cursors.right.isDown) {
                this._run(this.config.runVelocity, false)
            } else if (this.cursors.left.isDown) {
                this._run(-this.config.runVelocity, true);
            }
        }
    }


}

export default Player;