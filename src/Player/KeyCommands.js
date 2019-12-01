import AbilityManager from '../Ability/AbilityManager';

class KeyCommands {
    create(player) {
        this.player = player;
        this.player.isNotIdleAnimationBlocked = true;

        this._setMovementKeys();
        this._setNumberKeys();
        this._setEvents();
    }

    _setMovementKeys() {
        this.upKey = this.player.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.player.config.scene.input.keyboard.addKeys({
              'up': Phaser.Input.Keyboard.KeyCodes.W, 
              'left': Phaser.Input.Keyboard.KeyCodes.A,
              'right': Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    _setNumberKeys() {
        this.hotkeyBarKeyEventNames = [
            'keydown-ONE',
            'keydown-TWO',
            'keydown-THREE',
            'keydown-FOUR',
            'keydown-FIVE',
            'keydown-SIX',
            'keydown-SEVEN',
            'keydown-EIGHT',
            'keydown-NINE',
            'keydown-ZERO',
        ]
    }

    _onHotkeyDown(ev) {
        const data = { 
            id: String.fromCharCode(ev.keyCode) 
        };

        this._useAbility(data);
    }

    _setHotkeyEvents() {
        for (let eventName of this.hotkeyBarKeyEventNames) {
            this.player.config.scene.input.keyboard.on(
                eventName, (ev) => this._onHotkeyDown(ev), false
            )
        }
    }

    _useAbilityOnFocusedObject(data) {
        const selectedAbility = $G.hotkeys.keys[data.id];

        AbilityManager.use({
            user: this.player,
            target: this.player.config.scene.focusedGameObject,
            ...selectedAbility
        });
    }

    _useAbilityOnCursorPosition() {
        //todo
    }
    
    _useAbility(data) {
        if (this.player.isNotMoving) {
            const isPlayerFocusedOnObject = this.player.config.scene.focusedGameObject;

            isPlayerFocusedOnObject ? this._useAbilityOnFocusedObject(data) : this._useAbilityOnCursorPosition();
        } 
    }

    _jump() {
        if (this.player.armatureDisplay.body.touching.down) this.player.jump();
    }

    _setEvents() {
        this.upKey.on(
            'down', () => this._jump()
        );

        this._setHotkeyEvents();

        $G.listen(
            "HotkeyBar::ClickedHotkey", (data) => this._useAbility(data)
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