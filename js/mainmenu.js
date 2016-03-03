var Bouncy = {};

Bouncy.MainMenu = function (game) {

	this.playButton = null;
    //this.wall = null;
};

Bouncy.MainMenu.prototype = {
    
    preload: function(){
        this.load.image('startbutton', 'assets/startbutton.png');
        //this.load.audio('correct', 'assets/numkey.wav');
        //this.load.audio('incorrect', 'assets/need_cells.wav');
        //this.load.audio('explosionsound', 'assets/explosion.mp3');
    },

	create: function () {
        
        var introtext = this.add.text(25, 150, "Welcome to Bouncy! In this game, you are in control\nof a bouncy beach ball which must safely make it back to its owner. Click around the\nball to accelerate it towards where you need to be, either evading obstacles or escaping\nthe level. ", { fontSize: '20px', fill: '#fff' });

		this.playButton = this.add.button(400, 400, 'startbutton', this.play, this);

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
		this.state.start('Backstory');
        

	}

};