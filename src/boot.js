import Phaser from 'phaser';
import Preload from './preload.js';
import Game from './game.js';

class Boot {

    constructor() {
        this.initConfig();
    }

    initConfig() {

        this.config = {
            type: Phaser.AUTO,
            width: 1400,
            height: 800,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: Preload.start,
                create: Game.start
            }
        };        
    }

    start() {
        this.game = new Phaser.Game(this.config);
        return this.game;
    }

} 

export default new Boot();
