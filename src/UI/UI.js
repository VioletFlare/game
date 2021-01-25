import $ from "cash-dom";
import DraggableManager from './DraggableManager';
import HotkeyBar from './HotkeyBar';
import AbilityBook from './AbilityBook';
import Log from './Log';
import DialogueBox from './DialogueBox';

class UI {

    constructor() {
        this.$body = $(document.body);
        window.$ = $;
    }

    _createUILayer() {
        this.$uiLayer = $('<div></div>');
        this.$uiLayer.addClass('uiLayer');
        this.$body.append(this.$uiLayer);
    }

    create() {
        this._createUILayer();

        const draggableManager = new DraggableManager();
        
        HotkeyBar.create();
        AbilityBook.create();
        draggableManager.create();
        Log.create();
        DialogueBox.create();
    }
}

export default UI;