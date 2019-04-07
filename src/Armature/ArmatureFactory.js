import Armature from './Armature';

class ArmatureFactory {

    create(config) {
        return new Armature(config);
    }

}

export default new ArmatureFactory();