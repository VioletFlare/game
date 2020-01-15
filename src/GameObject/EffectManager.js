import Explosion from '../Physics/Explosion';

class EffectManager {

    constructor(target) {
        this.target = target;
    }

    applyEffect(user, effect) {
        $G.emit("EffectManager::appliedEffect", {
            user: user, 
            effect: effect, 
            target: this.target
        })

        this._handleAfterEffect(effect);
    }

    _createExplosion(effect) {
        const currentTargetPosition = this.target.armatureDisplay.body.center;
        
        new Explosion(currentTargetPosition, effect);
    }

    _handleAfterEffect(effect) {
        if (effect.config.isAoE) {
            this._createExplosion(effect);
        }
    }

}

export default EffectManager;