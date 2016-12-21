var game = new Phaser.Game(1280, 720, Phaser.CANVAS, '');
//Destructible terrain doesn't work with WebGL, so canvas only.

game.state.add('Menu',menuScene);
game.state.add('Game',gameScene);

game.state.start('Game');
