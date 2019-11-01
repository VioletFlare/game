import icon from '../../assets/icon/fireball_icon.png';

class HotkeyBar {

    constructor() {
        this.hotkeyList = [{
            name: 'fireball',
            icon: icon,
            description: "bla bla bla"
        }];
        this.maxNumberOfHotkeys = 10;
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
        const hotkey = document.createElement('li');

        hotkey.dataset.id = hotkeyId;

        this.hotkeyBar.append(hotkey);
    }

    _createHotkeys() {
        for (let hotkeyId = 0; hotkeyId < this.maxNumberOfHotkeys; hotkeyId++) {
            this._createHotkey(hotkeyId);
        }
    }

    _loadHotkey(hotkey, index) {
        const currentHotkeySelector = `li[data-id='${index}']`,
            currentHotkey = this.hotkeyBar.querySelector(currentHotkeySelector),
            hotkeyIconUrl = `url(${hotkey.icon})`;

        currentHotkey.title = hotkey.name;
        currentHotkey.style.setProperty('--hotkey-icon-bg-img', hotkeyIconUrl);
    }

    _loadHotkeys() {
        this.hotkeyList.forEach(
            (hotkey, index) => this._loadHotkey(hotkey, index)
        )
    }

    _setup() {
        this.uiLayer = document.querySelector('.uiLayer');
    }

    create() {
        this._setup();
        this._createHotkeyBar();
        this._createHotkeys();
        this._loadHotkeys();
    }

}

export default new HotkeyBar();