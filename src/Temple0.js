import Utils from './Utils';
import dark_tiles from '../assets/images/dark_tiles.png';
import temple0 from '../assets/maps/temple0';
import InvisibleWalls from './InvisibleWalls';
import PlayerFactory from './Player/PlayerFactory';
import Npc from './Npc';
import Girl from './Character/Girl';

class Temple0 extends Phaser.Scene {
    
    constructor() {
        super();
    }

    _initCharacters() {
        const config = {
            scale: 0.45,
            scene: this,
            armature: Girl.armature
        }

        this.player = PlayerFactory.create(config);
    }

    _preloadCharacters() {
        this.player.preload();
        Npc.preload(this);
    }

    _createCharacters() {
        let playerLayer = Utils.findObjectLayerByName(this.map, 'player');
        let playerSpawn = Utils.findObjectsByName(playerLayer, 'player_spawn');
        this.player.create(playerSpawn);
        playerSpawn[0].x += 150;

        this.npc = Npc.create(playerSpawn);
    }

    _updateCharacters() {
        this.player.update();
        Npc.update();
    }

    _preloadPlugins() {
        this.plugins.installScenePlugin('dragonBones', dragonBones.phaser.plugin.DragonBonesScenePlugin, 'dragonbone', this);
    }

    _preloadMap() {
        this.load.image('dark_tiles', dark_tiles);
        this.load.tilemapTiledJSON('temple0', temple0);
    }

    _createMap() {
        this.map = this.add.tilemap('temple0');
        const dark_tiles = this.map.addTilesetImage('dark_tiles', 'dark_tiles');
        this.arch = this.map.createStaticLayer('arch', dark_tiles, 0, 0);
        this.ground = this.map.createStaticLayer('ground', dark_tiles, 0, 0);
    }

    _createPhysics() {
        let collisionLayer = Utils.findObjectLayerByName(this.map, 'collision');
        let invisibleWalls = InvisibleWalls.create(this, collisionLayer);
        this.physics.world.setBounds(0, 0, 42*32, 32*32);
        this.physics.add.collider(this.player.armatureDisplay, invisibleWalls);
        this.physics.add.collider(this.npc, invisibleWalls);
    }

    _createCamera() {
        this.cameras.main.setBounds(0, 0, 42*32, 32*32);
        this.cameras.main.zoom = 2;
        this.cameras.main.startFollow(this.player.armatureDisplay, true, 0.08, 0.08);
    }

    preload() {
        this._preloadPlugins();
        this._initCharacters();
        this._preloadCharacters();
        this._preloadMap();
    }

    create() {
        this._createMap();
        this._createCharacters();
        this._createPhysics();
        this._createCamera();
    }

    update() {
        this._updateCharacters();
    }

}

export default Temple0;