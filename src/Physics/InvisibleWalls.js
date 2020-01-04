class InvisibleWalls {

    _calculatePosition(object) {
        const isPolylineWidthNegative = object.polyline[1].x < 0,
            isPolylineHeightNegative = object.polyline[1].y < 0;

        let position;


        if (isPolylineWidthNegative) {
            position = [
                (object.x + object.polyline[1].x), 
                (object.y + object.polyline[0].y)
            ]
        } else if (isPolylineHeightNegative) {
            position = [
                (object.x + object.polyline[0].x), 
                (object.y + object.polyline[1].y)
            ]
        } else {
            position = [
                (object.x + object.polyline[0].x), 
                (object.y + object.polyline[0].y)
            ]
        }

        return position;
    }

    _calculateDimension(object, width = 5, height = 5) {
        const isPolyLineHorizontal = object.polyline[0].y === object.polyline[1].y;

        isPolyLineHorizontal ? 
            width = (object.x + object.polyline[1].x) - (object.x + object.polyline[0].x)
        : 
            height = (object.y + object.polyline[1].y) - (object.y + object.polyline[0].y);

        const dimension = [Math.abs(width), Math.abs(height)];

        return dimension;
    }

    _createWall(object) {
        const position = this._calculatePosition(object),
            dimension = this._calculateDimension(object),
            wall = this.invisibleWalls.create(...position).setOrigin(0, 0);

        wall.setDisplaySize(...dimension);
        wall.refreshBody();
    }

    create(context, collisionLayer, invisible = true) {
        this.invisibleWalls = context.physics.add.staticGroup();
    
        collisionLayer.objects.forEach(
            (object) => this._createWall(object)
        )
        
        invisible ? this.invisibleWalls.toggleVisible() : 0;
    
        return this.invisibleWalls;
    }
}

export default new InvisibleWalls();