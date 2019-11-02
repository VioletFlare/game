import icon from '../../assets/icon/fireball_icon.png';

class AbilityBook {

    constructor() {
        this.abilityList = [{
            name: 'fireball',
            icon: icon,
            description: "bla bla bla, fireballs",
        }];
    }

    _loadAbilities() {

    }

    _createAbilityBook() {

    }

    _setup() {
        this.uiLayer = document.querySelector('.uiLayer');
    }

    create() {
        this._setup();
    }
    
}

export default new AbilityBook();