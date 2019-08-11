import Effect from './Effect';

class EffectFactory {

    create(config) {
        return new Effect(config);
    }

}

export default new EffectFactory();