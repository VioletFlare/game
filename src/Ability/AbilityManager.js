import SpellManager from '../Ability/Spell/SpellManager'

class AbilityManager {

    use(abilityConfig) {
        abilityConfig.user.isNotIdleAnimationBlocked = false;

        if (abilityConfig.isSpell) {
            SpellManager.use(abilityConfig)
        } else if (abilityConfig.isRanged) {

        } else if (abilityConfig.isMeele) {

        }
    }

}

export default new AbilityManager();