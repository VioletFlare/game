class Explosion {

    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
    }

    create(scene, position, size) {
        this.explosionArea = scene.add.zone(
            position.x, 
            position.y,
            size.width,
            size.height
        );

        scene.physics.world.enable(this.explosionArea, 0);

        this.explosionArea.setAllowGravity(false);
        this.explosionArea.moves = false;
    }

    _setEvents() {
        this.explosionArea.on('enterzone', () => {
            
        })
    }

}