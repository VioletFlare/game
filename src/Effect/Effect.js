class Effect {

    constructor(config) {
        this.scene = config.scene;
        this.particles = this.scene.add.particles(config.atlasName);
        this.emitter = this.particles.createEmitter(config.emitterConfiguration);
        this.config = config;
    }

    _setupContainerPhysics() {
        this.scene.physics.world.enable(this.container);

        this.container.body.allowGravity = false;
        this.container.body.allowDrag = false;
    }

    _setupContainerDimensions() {
        this.container.body.setSize(this.config.physicConfiguration.width, this.config.physicConfiguration.height);
        this.container.body.offset.set(this.config.physicConfiguration.offsetX, this.config.physicConfiguration.offsetY);
    }

    create(originPos) {
        this.originPos = originPos;
        this.container = this.scene.add.container(this.originPos.x, this.originPos.y);
        this.container.add(this.particles);
        this.container.setPosition(this.originPos.x, this.originPos.y);

        if (this.config.physicConfiguration) {
            this._setupContainerPhysics();
            this._setupContainerDimensions();
        }

        this.emitter.start();
    }

}

export default Effect;