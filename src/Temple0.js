import Utils from './Utils';
import dark_tiles from '../assets/images/dark_tiles.png';
import temple0 from '../assets/maps/temple0';
import InvisibleWalls from './InvisibleWalls';
import Player from './Player';
import Npc from './Npc';

class Temple0 extends Phaser.Scene {
    
    constructor() {
        super();
    }

    preload() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);

        Player.preload(this);
        Npc.preload(this);

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
        let invisibleWalls = InvisibleWalls.create(this, collisionLayer);
        this.physics.world.setBounds(0, 0, 42*32, 32*32);
        this.physics.add.collider(this.player, invisibleWalls);
        this.physics.add.collider(this.npc, invisibleWalls);
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
        this.player = Player.create(playerSpawn);
        playerSpawn[0].x += 150;

        this.npc = Npc.create(playerSpawn);
        

        this.setupPhysics();
        this.setupCamera();
    }

    update() {
        Player.update(this);
        Npc.update();
    }

}

export default Temple0;