import icon from '../../assets/icon/fireball_icon.png';
import delegate from 'delegate';

class HotkeyBar {

    constructor() {
        $G.hotkeys = {}
        $G.hotkeys.maxNumber = 10;
    }

    _createHotkeyBar() {
        this.hotkeyBarContainer = document.createElement('div');
        this.hotkeyBar = document.createElement('ul');

        this.hotkeyBarContainer.classList.add("hotkeyBarContainer");
        this.hotkeyBar.dataset.id = 0;
        this.hotkeyBar.classList.add("hotkeyBar");
        
        this.hotkeyBarContainer.append(this.hotkeyBar);
        this.uiLayer.append(this.hotkeyBarContainer);
    }

    _createHotkey(hotkeyId) {
        const hotkey = document.createElement('li'),
            isTenthHotkey = hotkeyId === $G.hotkeys.maxNumber;

        if (isTenthHotkey) {
            hotkey.dataset.id = 0;
        } else {
            hotkey.dataset.id = hotkeyId;
        }

        this.hotkeyBar.append(hotkey);
    }

    _createHotkeys() {
        for (let hotkeyId = 1; hotkeyId <= $G.hotkeys.maxNumber; hotkeyId++) {
            this._createHotkey(hotkeyId);
        }
    }

    _loadHotkey(hotkey) {
        const currentHotkeySelector = `li[data-id='${hotkey.hotkeyId}']`,
            currentHotkey = this.hotkeyBar.querySelector(currentHotkeySelector),
            hotkeyIconUrl = `url(${hotkey.icon})`;

        currentHotkey.title = hotkey.name;
        currentHotkey.style.setProperty('--hotkey-icon-bg-img', hotkeyIconUrl);
    }

    _loadHotkeys() {
        $G.hotkeys.list.forEach(
            hotkey => this._loadHotkey(hotkey)
        )
    }

    _onHotkeyClicked(ev) {
        const clickedHotkey = ev.delegateTarget;

        $G.emit("HotkeyBar::ClickedHotkey", { id: clickedHotkey.dataset.id });
    }

    _setEvents() {
        const hotkeysSelector = '.hotkeyBar li';

        delegate(
            hotkeysSelector, 'click', (ev) => this._onHotkeyClicked(ev)
        );

        $G.listen("Game::LoadHotkeys", () => this._loadHotkeys())
    }

    _setup() {
        this.uiLayer = document.querySelector('.uiLayer');
    }

    create() {
        this._setup();
        this._createHotkeyBar();
        this._createHotkeys();
        this._setEvents();
    }

}

export default new HotkeyBar();