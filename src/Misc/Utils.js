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

}

export default new Utils();




