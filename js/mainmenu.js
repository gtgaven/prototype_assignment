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
        
        var introtext = this.add.text(25, 25, "Directions: Enter the correct numbers to figure out the code", { fontSize: '32px', fill: '#000' });

		this.playButton = this.add.button(100, 200, 'startbutton', this.play, this);

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