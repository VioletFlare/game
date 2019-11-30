import AbilityManager from '../Ability/AbilityManager';

class KeyCommands {
    create(player) {
        this.spaceKey = player.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.upKey = player.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.player = player;
        this.player.isNotIdleAnimationBlocked = true;

        this._setEvents();
    }

    _useAbilityOnFocusedObject() {
        AbilityManager.use({
            user: this.player,
            target: this.player.config.scene.focusedGameObject,
            ...this.player.abilities.fireball
        });
    }

    _useAbilityOnCursorPosition() {

    }
    
    _useAbility() {
        if (this.player.isNotMoving) {
            const isPlayerFocusedOnObject = this.player.config.scene.focusedGameObject;

            isPlayerFocusedOnObject ? this._useAbilityOnFocusedObject() : this._useAbilityOnCursorPosition();
        } 
    }

    _jump() {
        if (this.player.armatureDisplay.body.touching.down) this.player.jump();
    }

    _setEvents() {
        this.spaceKey.on(
            'down', () => this._useAbility()
        );

        this.upKey.on(
            'down', () => this._jump()
        );
    }

    update(player) {
        player.isNotMoving = !(player.cursors.right.isDown || player.cursors.left.isDown || player.cursors.up.isDown) && player.armatureDisplay.body.touching.down;
        player.isIdle = player.isNotIdleAnimationBlocked && player.isNotMoving;

        if (player.isIdle) {
            player._idle();
        } else {
            if (player.cursors.right.isDown) {
                player._run(player.config.runVelocity, false)
            } else if (player.cursors.left.isDown) {
                player._run(-player.config.runVelocity, true);
            }
        }
    }
}

export default new KeyCommands();