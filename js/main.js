window.onload = function() {

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
	game.state.add('MainMenu', Defusal.MainMenu);
	game.state.add('Phase1', Defusal.Phase1);
    game.state.add('Phase2', Defusal.Phase2);
    game.state.add('Phase3', Defusal.Phase3);
	//start the MainMenu state.
	game.state.start('MainMenu');
};

