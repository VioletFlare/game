import Utils from './Utils.js';
import dark_tiles from '../assets/images/dark_tiles.png';
import temple0 from '../assets/maps/temple0.json';
import Player from './Player.js';

class Temple0 extends Phaser.Scene {
    
    constructor() {
        super();
    }

    preload() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);
        Player.preload(this);
        this.load.image('dark_tiles', dark_tiles);
        this.load.tilemapTiledJSON('temple0', temple0);
    }

    setupMap() {
        this.map = this.add.tilemap('temple0');
        const dark_tiles = this.map.addTilesetImage('dark_tiles', 'dark_tiles');
        this.arch = this.map.createStaticLayer('arch', dark_tiles, 0, 0);
        this.ground = this.map.createStaticLayer('ground', dark_tiles, 0, 0);
    }

    setupPhysics() {
        let collisionLayer = Utils.findObjectLayerByName(this.map, 'collision');
        let invisibleWalls = Utils.createInvisibleWalls(this, collisionLayer);
        this.physics.world.setBounds(0, 0, 42*32, 32*32);
        this.physics.add.collider(this.player, invisibleWalls);
    }

    setupCamera() {
        this.cameras.main.setBounds(0, 0, 42*32, 32*32);
        this.cameras.main.zoom = 2;
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.setupMap();
        let playerLayer = Utils.findObjectLayerByName(this.map, 'player');
        let playerSpawn = Utils.findObjectsByName(playerLayer, 'player_spawn');
        this.player = Player.create(this, playerSpawn);

        this.setupPhysics();
        this.setupCamera();
    }

    update() {
        Player.update(this);
    }

}

export default Temple0;