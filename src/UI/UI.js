import HotkeyBar from './HotkeyBar';
import AbilityBook from './AbilityBook';

class UI {

    constructor() {
        this.body = document.body;
    }

    _createUILayer() {
        this.uiLayer = document.createElement('div');
        this.uiLayer.classList.add('uiLayer');
        this.body.append(this.uiLayer);
    }

    create() {
        this._createUILayer();
        HotkeyBar.create();
        AbilityBook.create();
    }
}

export default UI;