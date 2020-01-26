import Effect from './Effect';

class SpellEffect extends Effect {

    create(originPos) {
        super.create(originPos);

        this.emitter.start();
    }

}

export default SpellEffect;