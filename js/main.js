window.onload = function() {

	var game = new Phaser.Game(800, 700, Phaser.AUTO, 'game');
	game.state.add('MainMenu', Bouncy.MainMenu);
	game.state.add('Level1', Bouncy.Level1);
    game.state.add('Finish', Bouncy.Finish);
   // game.state.add('Phase3', Bouncy.Phase3);
	//start the MainMenu state.
	game.state.start('MainMenu');
};

