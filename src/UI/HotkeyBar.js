import delegate from 'delegate';

class HotkeyBar {

    constructor() {
        $G.hotkeys = {}

        this.maxKeysInNumberRow = 10;
    }

    _createHotkeyBarDOM() {
        this.hotkeyBarContainer = document.createElement('div');
        this.hotkeyBar = document.createElement('ul');

        this.hotkeyBarContainer.classList.add("hotkeyBarContainer");
        this.hotkeyBar.dataset.id = 0;
        this.hotkeyBar.classList.add("hotkeyBar");
        
        this.hotkeyBarContainer.append(this.hotkeyBar);
        this.uiLayer.append(this.hotkeyBarContainer);
    }

    _createHotkeyListItemDOM(hotkeyId) {
        const hotkey = document.createElement('li'),
            isTenthHotkey = hotkeyId === this.maxKeysInNumberRow ;

        if (isTenthHotkey) {
            hotkey.dataset.id = 0;
        } else {
            hotkey.dataset.id = hotkeyId;
        }

        this.hotkeyBar.append(hotkey);
    }

    _createHotkeyListInnerDOM() {
        for (let hotkeyId = 1; hotkeyId <= this.maxKeysInNumberRow; hotkeyId++) {
            this._createHotkeyListItemDOM(hotkeyId);
        }
    }

    _isHotkeyValueValid(value) {
        const isHotkeyValueValid = 
            typeof value === 'object' && 
            value !== null &&
            Object.keys(value).length;

        return isHotkeyValueValid;
    }

    _loadHotkeyIntoDOM(key, value) {
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

        if (isHotkeyValueValid) this._loadHotkeyIntoDOM(key, value)
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
        this._createHotkeyBarDOM();
        this._createHotkeyListInnerDOM();
        this._setEvents();
    }

}

export default new HotkeyBar();