import GameObject from "../GameObject/GameObject";
import SpellManager from '../Ability/Spell/SpellManager'

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

    _useAbility(abilityConfig) {
        this.isNotIdleAnimationBlocked = false;

        if (abilityConfig.isSpell) {
            SpellManager.use(abilityConfig)
        } else if (abilityConfig.isRanged) {

        } else if (abilityConfig.isMeele) {

        }
    }

    _createKeyCommands() {
        const spaceKey = this.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            upKey = this.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        spaceKey.on('down', 
            () => this.isNotMoving ? this._useAbility({
                user: this,
                target: this.config.scene.focusedGameObject,
                ...this.config.scene.abilities.fireball
            }): 0
        );

        upKey.on('down', 
            () => this.armatureDisplay.body.touching.down ? this._jump(): 0
        )
    }

    update() {
        this.isNotMoving = !(this.cursors.right.isDown || this.cursors.left.isDown || this.cursors.up.isDown) && this.armatureDisplay.body.touching.down;
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