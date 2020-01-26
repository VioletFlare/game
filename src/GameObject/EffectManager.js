import AfterEffectManager from './AfterEffectManager';

class EffectManager {

    constructor(target) {
        this.target = target;
        this.afterEffectManager = new AfterEffectManager(this.target);
    }

    applyEffect(user, effect) {
        $G.emit("EffectManager::appliedEffect", {
            user: user, 
            effect: effect, 
            target: this.target
        })

        this.afterEffectManager.handleAfterEffect(effect);
    }

}

export default EffectManager;