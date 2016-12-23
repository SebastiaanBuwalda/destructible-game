var gameSceneVarHolder =
{
  gameScene.land = null;
}

var gameScene = {
    //"Awake" before start
    preload: function() {
        gameScene.game.renderer.renderSession.roundPixels = true;
        //roundPixels is needed for destructible terrain
        gameScene.physics.startSystem(Phaser.Physics.ARCADE);
        gameScene.physics.arcade.gravity.y = 100;
        //Start physics


    },

    //Start function
    create: function() {
      gameScene.land = game.add.bitmapData(0,0);
    },

    //Called every frame
    update: function() {

    }



}
