import delegate from 'delegate';

class HotkeyBar {

    constructor() {
        $G.hotkeys = {}

        this.maxKeysInNumberRow = 10;
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
            isTenthHotkey = hotkeyId === this.maxKeysInNumberRow ;

        if (isTenthHotkey) {
            hotkey.dataset.id = 0;
        } else {
            hotkey.dataset.id = hotkeyId;
        }

        this.hotkeyBar.append(hotkey);
    }

    _createHotkeys() {
        for (let hotkeyId = 1; hotkeyId <= this.maxKeysInNumberRow; hotkeyId++) {
            this._createHotkey(hotkeyId);
        }
    }

    _isHotkeyValueValid(value) {
        const isHotkeyValueValid = 
            typeof value === 'object' && 
            value !== null &&
            Object.keys(value).length;

        return isHotkeyValueValid;
    }

    _loadHotkeyIntoDom(key, value) {
        const currentHotkeySelector = `li[data-id='${key}']`,
            currentHotkey = this.hotkeyBar.querySelector(currentHotkeySelector),
            hotkeyIconUrl = `url(${value.icon})`;

        currentHotkey.title = value.name;
        currentHotkey.style.setProperty('--hotkey-icon-bg-img', hotkeyIconUrl);
    }

    _loadHotkey(hotkey) {
        const key = hotkey[0],
            value = hotkey[1],
            isHotkeyValueValid = this._isHotkeyValueValid(value);

        if (isHotkeyValueValid) this._loadHotkeyIntoDom(key, value)
    }

    _loadHotkeys() {
        const keys = Object.entries($G.hotkeys.keys);

        keys.forEach(
            hotkey => this._loadHotkey(hotkey)
        )
    }

    _onHotkeyClicked(ev) {
        const clickedHotkey = ev.delegateTarget;

        $G.emit("HotkeyBar::ClickedHotkey", { id: clickedHotkey.dataset.id });
    }

    _setEvents() {
        delegate(
            this.hotkeysSelector, 'click', (ev) => this._onHotkeyClicked(ev)
        );

        $G.listen(
            "Game::LoadHotkeys", () => this._loadHotkeys()
        );
    }

    _setup() {
        this.uiLayer = document.querySelector('.uiLayer');
        this.hotkeysSelector = '.hotkeyBar li';
    }

    create() {
        this._setup();
        this._createHotkeyBar();
        this._createHotkeys();
        this._setEvents();
    }

}

export default new HotkeyBar();