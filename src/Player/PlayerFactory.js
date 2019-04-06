import Player from './Player'

class PlayerFactory {

    create(config) {
        return new Player(config);
    }

}

export default new PlayerFactory();