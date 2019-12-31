class FakeTiledPolygonObject {

    constructor() {
        this.height = 0;
        this.id = 2
        this.name = "";
        this.polyline = [];
        this.rotation = 0;
        this.type = "";
        this.visible = true;
        this.width = 0;
        this.x = 0;
        this.y = 0;
    }

    setPolyline(polyline) {
        this.polyline = polyline;
    }

    setObjectPosition(x, y) {
        this.x = x;
        this.y = y;
    }

}

export default FakeTiledPolygonObject;