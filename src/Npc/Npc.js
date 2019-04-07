import GameObject from '../GameObject/GameObject';


class Npc extends GameObject {

    constructor(config) {
        super(config)
    }

    preload() {
        super.preload();
    }

    create(playerSpawn) {
        super.create(playerSpawn);
        this.config.obj.create(this.armatureDisplay);
    }

    _run(velocity) {
        this.config.obj.run(this.armatureDisplay, velocity, this.flipX);
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