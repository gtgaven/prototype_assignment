window.onload = function() {

	var game = new Phaser.Game(800, 800, Phaser.AUTO, 'game');
	game.state.add('MainMenu', Bouncy.MainMenu);
    game.state.add('Level0', Bouncy.Level0);
	game.state.add('Level1', Bouncy.Level1);
    game.state.add('Level2', Bouncy.Level2);
    game.state.add('Level3', Bouncy.Level3);
    game.state.add('Level4', Bouncy.Level4);
    game.state.add('Finish', Bouncy.Finish);
	//start the MainMenu state.
	game.state.start('MainMenu');
};

