import Utils from '../Misc/Utils';
import dark_tiles from '../../assets/tiles/dark_tiles.png';
import temple0_map from '../../assets/maps/temple0';
import InvisibleWalls from '../Physics/InvisibleWalls';
import PlayerFactory from '../Player/PlayerFactory';
import NpcFactory from '../Npc/NpcFactory';
import Girl from '../Skin/Girl';
import Ghost from '../Skin/Ghost';
import BaseScene from './BaseScene';

class Temple0 extends BaseScene {
    
    constructor() {
        super('Game');
    }

    _initCharacters() {
        //!
        $G.hotkeys = {
            keys: {
                '1': this.abilities.fireball,
                '2': this.abilities.explodingFireball,
                'F4': {}
            }
        }

        const config = {
            scale: 0.45,
            name: 'Player',
            scene: this,
            runVelocity: 160,
            jumpVelocity: 280,
            skin: Girl
        }

        const ghostconf = {
            scale: 0.32,
            name: 'Ghost',
            scene: this,
            runVelocity: 160,
            jumpVelocity: 280,
            skin: Ghost
        }

        this.player = PlayerFactory.create(config);
        this.ghost = NpcFactory.create(ghostconf);
        this.ghost2 = NpcFactory.create(ghostconf);
        this.ghost3 = NpcFactory.create(ghostconf);
    }

    _preloadCharacters() {
        this.player.preload();
        this.ghost.preload();
        this.ghost2.preload();
        this.ghost3.preload();
    }

    _setAbilities() {
        this.player.abilities['fireball'] = this.abilities.fireball;

    }

    _createCharacters() {
        const playerLayer = Utils.findObjectLayerByName(this.map, 'player'),
            npcLayer = Utils.findObjectLayerByName(this.map, 'npc'),
            playerSpawn = Utils.findObjectsByName(playerLayer, 'player_spawn'),
            ghostSpawn0 = Utils.findObjectsByName(npcLayer, 'ghost_spawn_0'),
            ghostSpawn1 = Utils.findObjectsByName(npcLayer, 'ghost_spawn_1'),
            ghostSpawn2 = Utils.findObjectsByName(npcLayer, 'ghost_spawn_2');

        this.player.create(playerSpawn);
        this.ghost.create(ghostSpawn0);
        this.ghost2.create(ghostSpawn1);
        this.ghost3.create(ghostSpawn2);

        this._setAbilities();
    }

    _updateCharacters() {
        this.player.update();
    }

    _preloadMap() {
        this.load.image('dark_tiles', dark_tiles);
        this.load.tilemapTiledJSON('temple0', temple0_map);
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
        this.physics.add.collider(this.ghost.armatureDisplay, invisibleWalls);
        this.physics.add.collider(this.ghost2.armatureDisplay, invisibleWalls);
        this.physics.add.collider(this.ghost3.armatureDisplay, invisibleWalls);
    }

    _createCamera() {
        this.cameras.main.setBounds(0, 0, 42*32, 32*32);
        this.cameras.main.zoom = 2;
        this.cameras.main.startFollow(this.player.armatureDisplay, true, 0.08, 0.08);
    }

    preload() {
        super.preload();
        this._initCharacters();
        this._preloadCharacters();
        this._preloadMap();

        $G.emit("Game::LoadHotkeys");
    }

    create() {
        super.create();
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