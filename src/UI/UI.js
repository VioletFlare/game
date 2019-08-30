import HotkeyBar from '../UI/HotkeyBar';
import AbilityBook from '../UI/AbilityBook';

class UI extends Phaser.Scene {

    constructor() {
        super({
            key: 'UI',
            active: true
        })
    }

    create() {
        HotkeyBar.create(this);
        AbilityBook.create(this);
    }

}

export default UI;