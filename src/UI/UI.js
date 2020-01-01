import DraggableManager from './DraggableManager';
import HotkeyBar from './HotkeyBar';
import AbilityBook from './AbilityBook';
import Log from './Log';

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

        const draggableManager = new DraggableManager();
        
        HotkeyBar.create();
        AbilityBook.create();
        draggableManager.create();
        Log.create();
    }
}

export default UI;