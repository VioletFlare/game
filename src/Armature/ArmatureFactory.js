import ArmatureDisplay from './ArmatureDisplay';

class ArmatureDisplayFactory {

    create(scene, armature, scale) {
        return new ArmatureDisplay(scene, armature, scale);
    }

}

export default new ArmatureDisplayFactory();