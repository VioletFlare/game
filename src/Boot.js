import Phaser from 'phaser';
import Temple0 from './Temple0.js';

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
            scene: Temple0
        };        
    }

    start() {
        this.game = new Phaser.Game(this.config);
        return this.game;
    }

} 


export default new Boot();
