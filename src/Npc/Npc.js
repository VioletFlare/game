import GameObject from '../GameObject/GameObject';


class Npc extends GameObject {

    constructor(config) {
        super(config)
    }

    preload() {
        super.preload();
    }

    applyEffect(user, effect) {
        console.log(user, ' applied ', effect, ' on ', this);
    }

    create(playerSpawn) {
        super.create(playerSpawn);
        this.config.skin.create(this.armatureDisplay);
    }

    _run(velocity) {
        this.config.skin.run(this.armatureDisplay, velocity, this.flipX);
    }

    patrol() {

            setInterval(
                () => {
                    if (this.flipX) {
                        this._run(-160);
                        this.flipX = false;
                    } else {
                        this._run(160)
                        this.flipX = true;
                    }
                }, 2000
            )

    }

}

export default Npc;