import Projectile from '../../Physics/Projectile';
import SpellEffect from "../../Effect/SpellEffect";

class SpellManager {

    _getAnimationDuration(abilityConfig) {
        const animationDuration = abilityConfig.user.armatureDisplay.armature.animation.animations[abilityConfig.animationName].duration,
        animationDurationMs = Math.floor(animationDuration * 1000);

        return animationDurationMs;
    }

    _throw(abilityConfig) {
        const effect = new SpellEffect(abilityConfig),
            projectile = new Projectile(abilityConfig.user, abilityConfig.target, effect),
            animationDuration = this._getAnimationDuration(abilityConfig);

        projectile.launch();

        abilityConfig.user.config.skin.throwSpell(abilityConfig.user.armatureDisplay);

        setTimeout(
            () => abilityConfig.user.isNotIdleAnimationBlocked = true, animationDuration
        );
    }

    use(abilityConfig) {
        if (abilityConfig.target) {
            this._throw(abilityConfig)
        } else {
            //cast self
        }
    }

}

export default new SpellManager();