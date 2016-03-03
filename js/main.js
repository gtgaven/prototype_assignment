window.onload = function() {

	var game = new Phaser.Game(1200, 700, Phaser.AUTO, 'game');
	game.state.add('MainMenu', Bouncy.MainMenu);
	game.state.add('Backstory', Bouncy.Backstory);
    //game.state.add('Phase2', Bouncy.Phase2);
   // game.state.add('Phase3', Bouncy.Phase3);
	//start the MainMenu state.
	game.state.start('MainMenu');
};

