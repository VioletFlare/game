import Effect from './Effect';

class ExplosionEffect extends Effect {

    constructor(config) {
        super(config);
    }
    
    create(originPos) {
        super.create(originPos);

        this.emitter.explode();
    }

}

export default ExplosionEffect;