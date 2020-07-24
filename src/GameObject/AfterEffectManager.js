import Explosion from '../Physics/Explosion';
import ExplosionEffect from '../Effect/ExplosionEffect';

class AfterEffectManager {

    constructor(target) {
        this.target = target;
    }

    _createExplosion(effect) {
        const currentTargetPosition = this.target.armatureDisplay.body.center,
            explosionEffect = new ExplosionEffect(effect.config);
        
        new Explosion(currentTargetPosition, explosionEffect);
    }

    handleAfterEffect(effect) {
        if (effect.config.isAoE) {
            this._createExplosion(effect);
        }
    }
}

export default AfterEffectManager;