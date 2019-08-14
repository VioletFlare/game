import HotkeyBar from '../UI/HotkeyBar';

class UI extends Phaser.Scene {

    constructor() {
        super({
            key: 'UI',
            active: true
        })
    }

    create() {
        HotkeyBar.create(this);
    }

}

export default UI;