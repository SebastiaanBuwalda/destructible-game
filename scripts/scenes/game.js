var gameScene = {
    //"Awake" before start
    preload: function() {
        gameScene.stage.backgroundColor = "#4488AA";
        gameScene.game.renderer.renderSession.roundPixels = true;
        //roundPixels is needed for destructible terrain
        gameScene.physics.startSystem(Phaser.Physics.ARCADE);
        gameScene.physics.arcade.gravity.y = 800;
        //Start physics

    },

    //Start function
    create: function() {
        gameScene.player = gameScene.add.sprite(10, 10, 'player');

        gameScene.bomb = gameScene.add.sprite(0, 0, 'bomb');
        gameScene.bomb.visible = false;
        gameScene.game.physics.enable(gameScene.bomb, Phaser.Physics.ARCADE);
        gameScene.bomb.body.gravity.y = -800;

        gameScene.walls = gameScene.game.add.group();

        gameScene.playerSpeed = 170;
        gameScene.playerJumpSpeed = 400;
        gameScene.jumpLongTime = 600;

        gameScene.jumpTimer = 0;

        gameScene.game.physics.enable(gameScene.player, Phaser.Physics.ARCADE);

        gameScene.player.body.collideWorldBounds = true;




        var level = [
        '               ',
        '               ',
        '               ',
        '               ',
        '               ',
        '               BBBBBBBBBBBBBB',
        '              B B B B B B B BBBBB',
        '             BBBBBBBBBBBBBBBB',
        '             BB',
        '     B    B  BB',
        '    BBB  BB  BB',
        'BBBBBBBBBBBBBBB'
      ];

      for (var i = 0; i < level.length; i++) {
          for (var j = 0; j < level[i].length; j++)
          {
            if (level[i][j] == 'B')
            {
              var wall = gameScene.game.add.sprite(30*j, 30*i, 'wall');
              gameScene.game.physics.enable(wall, Phaser.Physics.ARCADE);
              gameScene.walls.add(wall);
              wall.body.immovable = true;
              wall.body.moves = false;
            }

          }
      }


    },

    //Called every frame
    update: function() {
        gameScene.game.physics.arcade.collide(gameScene.player, gameScene.walls);

        if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) || (gameScene.game.input.keyboard.isDown(Phaser.Keyboard.A))) {
            playerFunctions.movePlayerLR(gameScene.player, -gameScene.playerSpeed);
        } else if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) || (gameScene.game.input.keyboard.isDown(Phaser.Keyboard.D))) {
            playerFunctions.movePlayerLR(gameScene.player, gameScene.playerSpeed);
        } else {
            playerFunctions.movePlayerLR(gameScene.player, 0);
        }

        if ((gameScene.game.input.keyboard.isDown(Phaser.Keyboard.UP) || gameScene.game.input.keyboard.isDown(Phaser.Keyboard.W) || gameScene.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) && ((gameScene.player.body.onFloor()) || (gameScene.player.body.touching.down)) && gameScene.game.time.now > gameScene.jumpTimer) {
            playerFunctions.movePlayerUD(gameScene.player, -gameScene.playerJumpSpeed)
            gameScene.jumpTimer = gameScene.game.time.now + gameScene.jumpLongTime;
        }

        if (gameScene.game.input.activePointer.isDown) {
          gameScene.bomb.visible = true;
          gameScene.bomb.reset(gameScene.player.x,gameScene.player.y);
          gameScene.game.physics.arcade.moveToPointer(gameScene.bomb, 450);
        }


    }



}
