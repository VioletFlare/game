import Npc from "./Npc";

class NpcFactory {

    create(config) {
        return new Npc(config);
    }

}

export default new NpcFactory();