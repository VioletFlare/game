import Effect from './Effect';

class ExplosionEffect extends Effect {
    
    create(originPos) {
        super.create(originPos);

        this.emitter.explode();
    }

}

export default ExplosionEffect;