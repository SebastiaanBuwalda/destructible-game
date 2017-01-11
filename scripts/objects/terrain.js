var terrainFunctions = {
    terrainDestruct: function(x, y, size, terrainToDestroy) {
        //this function destroys terrain in a circular form.
        terrainToDestroy.blendDestinationOut();
        terrainToDestroy.land.circle(x, y, size, 'rgba(0, 0, 0, 255');
        terrainToDestroy.land.blendReset();
        terrainToDestroy.land.update();
    },

    terrainCollide: function(x, y, terrainForCollision, otherObject) {
        //stops moving when colliding with terrain.
        var rgba = terrainForCollision.getPixel(x, y);
        if (rgba.a == 255) {
            otherObject.reset(x, y);
        }
    }
}
