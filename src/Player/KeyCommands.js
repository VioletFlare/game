import AbilityManager from '../Ability/AbilityManager';

class KeyCommands {
    create(player) {
        const spaceKey = player.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            upKey = player.config.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        spaceKey.on('down', 
            () => player.isNotMoving ? AbilityManager.use({
                user: player,
                target: player.config.scene.focusedGameObject,
                ...player.config.scene.abilities.fireball
            }): 0
        );

        upKey.on('down', 
            () => player.armatureDisplay.body.touching.down ? player.jump(): 0
        )

        player.isNotIdleAnimationBlocked = true;
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