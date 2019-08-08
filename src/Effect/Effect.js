class Effect {

    constructor(config) {
        this.particles = this.scene.add.particles(config.atlasName);
        this.emitter = this.particles.createEmitter(config.emitterConfiguration);
        this.physicConfiguration = config.physicConfiguration;
    }

    _setupContainerPhysics() {
        this.scene.physics.world.enable(this.container);

        this.container.body.allowGravity = false;
        this.container.body.allowDrag = false;
    }

    _setupContainerDimensions() {
        this.container.body.setSize(this.physicConfiguration.width, this.physicConfiguration.height);
        this.container.body.offset.set(this.physicConfiguration.offsetX, this.physicConfiguration.offsetY);
    }

    create(originPos) {
        this.originPos = originPos;
        this.container = this.scene.add.container(this.originPos.x, this.originPos.y);
        this.container.add(this.particles);
        this.container.setPosition(this.originPos.x, this.originPos.y);

        if (this.physicConfiguration) {
            this._setupContainerPhysics();
            this._setupContainerDimensions();
        }

        this.emitter.start();
    }

}

export default Effect;