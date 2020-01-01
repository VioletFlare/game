class FakeDOMMouseEvent {

    constructor() {
        this.clientX = 724;
        this.clientY = 411;
        
        this.delegateTarget = {
            offsetLeft: 627,
            offsetTop: 380
        };
    }

}

export default FakeDOMMouseEvent;