var gameScene = {
    //"Awake" before start
    preload: function() {
        gameScene.stage.backgroundColor = "#4488AA";
        gameScene.game.renderer.renderSession.roundPixels = true;
        //roundPixels is needed for destructible terrain
        gameScene.physics.startSystem(Phaser.Physics.ARCADE);
        gameScene.physics.arcade.gravity.y = 200;

        //Start physics

    },

    //Start function
    create: function() {
        gameScene.player = gameScene.add.sprite(0, 0, 'player');

        gameScene.playerSpeed = 120;
        gameScene.playerJumpSpeed = 250;
        gameScene.jumpLongTime = 750;

        gameScene.jumpTimer = 0;

        gameScene.game.physics.enable(gameScene.player, Phaser.Physics.ARCADE);
        gameScene.player.body.collideWorldBounds = true;
    },

    //Called every frame
    update: function() {
        if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) || (gameScene.game.input.keyboard.isDown(Phaser.Keyboard.A))) {
            playerFunctions.movePlayerLR(gameScene.player, -gameScene.playerSpeed);
        } else if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) || (gameScene.game.input.keyboard.isDown(Phaser.Keyboard.D))) {
            playerFunctions.movePlayerLR(gameScene.player, gameScene.playerSpeed);
        } else {
            playerFunctions.movePlayerLR(gameScene.player, 0);
        }

        if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.UP) || gameScene.game.input.keyboard.isDown(Phaser.Keyboard.W) || gameScene.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) && gameScene.player.body.onFloor() && gameScene.game.time.now > gameScene.jumpTimer) {
            console.log("jump!");
            playerFunctions.movePlayerUD(gameScene.player, -gameScene.playerJumpSpeed)
            gameScene.jumpTimer = gameScene.game.time.now + gameScene.jumpLongTime;
        }
    }



}
