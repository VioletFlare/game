import Temple0 from './Temple0.js';

class Boot {

    constructor() {
        this.initConfig();
    }

    initConfig() {

        this.config = {
            type: Phaser.AUTO,
            width: window.visualViewport.width,
            height: window.visualViewport.height,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: true
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
