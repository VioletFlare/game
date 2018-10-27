import dummy from '../assets/images/dummy37x45.png';

class Player {

    preload(context) {
        context.load.spritesheet('dummy', dummy, { frameWidth: 37, frameHeight: 45 });
    }

    create(context, x, y) {
        context.player = context.physics.add.sprite(x, y, 'dummy');
        context.player.setBounce(0.2);
        context.player.setCollideWorldBounds(true);

        context.anims.create({
            key: 'left',
            frames: context.anims.generateFrameNumbers('dummy', { start: 0, end: 17 }),
            frameRate: 10,
            repeat: -1
        });
    
        context.anims.create({
            key: 'idle',
            frames: [{key: 'dummy', frame: 4}]
        })
    
        context.anims.create({
            key: 'right',
            frames: context.anims.generateFrameNumbers('dummy', { start: 0, end: 17 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update(context) {
        if (context.cursors.left.isDown) {
            context.player.setVelocityX(-160);
            context.player.anims.play('left', true);
        } else if (context.cursors.right.isDown) {
            context.player.setVelocityX(160);
            context.player.anims.play('right', true);
        } else {
            context.player.setVelocityX(0);
            context.player.anims.play('idle', true);
        }

        if (context.cursors.up.isDown) {
            context.player.setVelocityY(-330);
        }
    }


}

export default new Player();