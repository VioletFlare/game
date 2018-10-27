class Utils {

    findObjectLayerByName(map, layerName) {
        return map.objects.find( 
            (layer) => { return layer.name === layerName } 
        )
    }

    findObjectsByName (objectLayer, objectName) {
        let result = new Array();
    
        objectLayer.objects.forEach(
            (object) => {
                object.name === objectName ? result.push(object) : 0
            }
        )
    
        return result;
    }
    
    createInvisibleWalls (context, collisionLayer, invisible = true) {
        let invisibleWalls = context.physics.add.staticGroup();
    
        const calculatePosition = (object) => {
            return [
                object.x + object.polyline[0].x, 
                object.y + object.polyline[0].y
            ];
        }
    
        const calculateDimension = (object, width = 5, height = 5) => {
            let isPolyLineHorizontal = object.polyline[0].y === object.polyline[1].y;
    
            isPolyLineHorizontal ? 
                width = (object.x + object.polyline[1].x) - (object.x + object.polyline[0].x)
                : 
                height = (object.y + object.polyline[1].y) - (object.y + object.polyline[0].y);
    
            return [width, height];
        }
    
        const create = (object) => {
            let position = calculatePosition(object);
            let dimension = calculateDimension(object);
    
            let wall = invisibleWalls.create(...position).setOrigin(0, 0);
            wall.setDisplaySize(...dimension);
    
            wall.refreshBody();
        }
    
        collisionLayer.objects.forEach(
            (object) => create(object)
        )
        
        invisible ? invisibleWalls.toggleVisible() : 0;
    
        return invisibleWalls;
    }

}

export default new Utils();




