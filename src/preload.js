import dark_tiles from '../assets/maps/dark_tiles.png';
import temple0 from '../assets/maps/temple0.json';


class Preload {

    start() {
        this.load.image('dark_tiles', dark_tiles);
        this.load.tilemapTiledJSON('temple0', temple0);
    }

}

export default new Preload();