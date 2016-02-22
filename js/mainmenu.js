var Defusal = {};

Defusal.MainMenu = function (game) {

	this.playButton = null;
    //this.wall = null;
};

Defusal.MainMenu.prototype = {
    
    preload: function(){
        this.load.image('startbutton', 'assets/startbutton.png');
        this.load.audio('correct', 'assets/numkey.wav');
        this.load.audio('incorrect', 'assets/need_cells.wav');
        this.load.audio('explosionsound', 'assets/explosion.mp3');
    },

	create: function () {
        
        var introtext = this.add.text(25, 150, "Welcome to Defusal! This game is split up into 3 phases:\n\nPhase 1: Guess the correct numbers. You only get 5\n\t\t wrong guesses, make sure to remember the order!\n\nPhase 2: Type the code in order\n\nPhase 3: Cut the blue or the red wire. Choose wisely!", { fontSize: '20px', fill: '#fff' });

		this.playButton = this.add.button(300, 50, 'startbutton', this.play, this);

	},

	update: function () {

//        if (!this.music.isPlaying){
//            this.music.play();
//        }
		//	Do some nice funky main menu effect here

	},
    
//    playLevelMusic: function(){
//        this.music.play();  
//    },

	play: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		//this.music.stop();

		//	And start the actual game
		this.state.start('Phase1');
        

	}

};