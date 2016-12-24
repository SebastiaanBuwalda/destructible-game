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
      
    },

    //Called every frame
    update: function() {

    }



}
