class GlobalObject extends Phaser.Events.EventEmitter {

    constructor() {
        super();
        
        this.isDebug = true;
    }

    emit(eventName, data) {
        super.emit(eventName, data);

        if (this.isDebug) console.log(eventName);
    }

    listen(eventName, callback) {
        super.addListener(eventName, callback);
    }

}

window.$G = new GlobalObject();