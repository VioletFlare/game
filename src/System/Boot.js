import Temple0 from '../Scene/Temple0';
import UI from '../UI/UI';

class Boot {

    constructor() {
        this.initConfig();
    }

    initConfig() {
        this.config = {
            type: Phaser.AUTO,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: true
                }
            },
            scale: {
                mode: Phaser.Scale.RESIZE,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            disableContextMenu: true,
            scene: [ Temple0 ]
        };        
    }

    start() {
        this.game = new Phaser.Game(this.config);
        this.ui = new UI();
        this.ui.create();
    }

} 


export default new Boot();
