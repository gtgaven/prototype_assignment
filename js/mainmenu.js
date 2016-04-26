var Bouncy = {};

Bouncy.MainMenu = function (game) {

	this.playButton = null;
    //this.wall = null;
};

// global Vars
var title;

Bouncy.MainMenu.prototype = {
    
    preload: function(){
        this.load.image('startbutton', 'assets/startbutton.png');
        this.load.image('helpbutton', 'assets/helpbutton.png');
        this.load.image('gametitle', 'assets/gametitle.png');
        this.load.audio('introSong', 'assets/playThatFunkyMusic.mp3');
        //this.load.audio('correct', 'assets/numkey.wav');
        //this.load.audio('incorrect', 'assets/need_cells.wav');
        //this.load.audio('explosionsound', 'assets/explosion.mp3');
    },

	create: function () {
        
        title = this.add.sprite(this.world.centerX, this.world.centerY, 'gametitle');
        title.anchor.setTo(0.5, 0.5);

		this.playButton = this.add.button(this.world.centerX - 55, 385, 'startbutton', this.play, this);
        this.playButton = this.add.button(this.world.centerX - 90, 450, 'helpbutton', this.play, this);
        
        music = this.add.audio('introSong');
        music.play();

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
		music.stop();

		//	And start the actual game
		this.state.start('Level1');
        

	}

};
