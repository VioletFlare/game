class FakeTiledPolygonObject {

    constructor() {
        this.height = 0;
        this.id = 2
        this.name = "";
        this.polyline = [
            { x: 16, y: 0 }, 
            { x: 846.667, y: 0 }
        ];
        this.rotation = 0;
        this.type = "";
        this.visible = true;
        this.width = 0;
        this.x = 129;
        this.y = 694;
    }

    setPolyline(polyline) {
        this.polyline = polyline;
    }

}

export default FakeTiledPolygonObject;