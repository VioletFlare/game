import Temple0 from '../Scene/Temple0';
import UIPlugin from '../../lib/rexuiplugin';
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
            plugins: {
                scene: [{
                    key: 'rexUI',
                    plugin: UIPlugin,
                    mapping: 'rexUI'
                }]
            },
            scene: [ Temple0, UI ]
        };        
    }

    start() {
        this.game = new Phaser.Game(this.config);
        return this.game;
    }

} 


export default new Boot();
