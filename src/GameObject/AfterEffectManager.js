import Explosion from '../Physics/Explosion';
import ExplosionEffect from '../Effect/ExplosionEffect';

class AfterEffectManager {

    constructor(target) {
        this.target = target;
    }

    _createExplosion(effect) {
        const currentTargetPosition = this.target.armatureDisplay.body.center,
            explosionEffect = new ExplosionEffect();
        
    
        new Explosion(currentTargetPosition, effect);
    }

    handleAfterEffect(effect) {
        if (effect.config.isAoE) {
            this._createExplosion(effect);
        }
    }
}

export default AfterEffectManager;