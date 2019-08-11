import Projectile from '../../Physics/Projectile';
import Effect from "../../Effect/Effect";

class SpellManager {

    _throw(abilityConfig) {
        const effect = new Effect(abilityConfig.user.config.scene.abilities.fireball),
            projectile = new Projectile(abilityConfig.user, abilityConfig.target, effect),
            animationDuration = Math.floor(abilityConfig.user.armatureDisplay.armature.animation.animations["cast_0"].duration * 1000);

        projectile.launch()

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