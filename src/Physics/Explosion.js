class Explosion {

    create(position, effect) {
        this.explosionArea = effect.scene.add.zone(
            position.x, 
            position.y,
            effect.config.physicConfiguration.explosionWidth,
            effect.config.physicConfiguration.explosionHeight
        );

        effect.scene.physics.world.enable(this.explosionArea, 0);

        //this.explosionArea.setAllowGravity(false);
        //this.explosionArea.moves = false;
    }

    _setEvents() {
        this.explosionArea.on('enterzone', () => {
            console.log("test");
        })
    }

}

export default Explosion;