class Game {

    start() {
        this.map = this.add.tilemap('temple0');
        const dark_tiles = this.map.addTilesetImage('dark_tiles', 'dark_tiles');

        this.ground = this.map.createStaticLayer('ground', dark_tiles, 0, 0);
        this.arch = this.map.createStaticLayer('arch', dark_tiles, 0, 0);
    }

}

export default new Game();