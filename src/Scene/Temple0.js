import Utils from '../Misc/Utils';
import dark_tiles from '../../assets/images/dark_tiles.png';
import temple0 from '../../assets/maps/temple0';
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
            list: [
                {
                    hotkeyId: 1,
                    name: 'fireball',
                    icon: icon,
                },
                {
                    hotkeyId: 2,
                    name: 'exploding_fireball',
                    icon: icon
                }
            ]
        }

        const config = {
            scale: 0.45,
            scene: this,
            runVelocity: 160,
            jumpVelocity: 280,
            skin: Girl
        }

        this.player = PlayerFactory.create(config);

        const ghostconf = {
            scale: 0.32,
            scene: this,
            runVelocity: 160,
            jumpVelocity: 280,
            skin: Ghost
        }

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

        //Phaser.Input.Keyboard.KeyCodes.ONE

        $G.hotkeys = {
            list: [
                {
                    hotkeyId: 1,
                    referemce: this.abilities.fireball
                },
                {
                    hotkeyId: 2,
                    name: 'exploding_fireball',
                    icon: icon
                }
            ],
            maxNumber: 10
        }

        this.player.abilities['fireball'] = {
            ...this.abilities.fireball
        }

    }

    _createCharacters() {
        let playerLayer = Utils.findObjectLayerByName(this.map, 'player');
        let playerSpawn = Utils.findObjectsByName(playerLayer, 'player_spawn');
        this.player.create(playerSpawn);
        playerSpawn[0].x += 150;
        this.ghost.create(playerSpawn);
        playerSpawn[0].x += 50;
        this.ghost2.create(playerSpawn);
        playerSpawn[0].x += 100;
        this.ghost3.create(playerSpawn);

        this._setAbilities();
    }

    _updateCharacters() {
        this.player.update();
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