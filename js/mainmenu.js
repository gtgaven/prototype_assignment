var Bouncy = {};

Bouncy.MainMenu = function (game) {

	this.playButton = null;
    //this.wall = null;
};

// global Vars
var title;
var startB;
var instructionB;
var goBackB;
var gameInfo;

Bouncy.MainMenu.prototype = {
    
    preload: function(){
        this.load.image('startbutton', 'assets/startbutton.png');
        this.load.image('helpbutton', 'assets/helpbutton.png');
        this.load.image('backbutton', 'assets/backbutton.png');
        this.load.image('gametitle', 'assets/gametitle.png');
        this.load.image('playInfo', 'assets/playInfo.png');
        this.load.audio('introSong', 'assets/spacePhase.mp3');
        //this.load.audio('correct', 'assets/numkey.wav');
        //this.load.audio('incorrect', 'assets/need_cells.wav');
        //this.load.audio('explosionsound', 'assets/explosion.mp3');
    },

	create: function () {
        
        title = this.add.sprite(this.world.centerX, this.world.centerY, 'gametitle');
        title.anchor.setTo(0.5, 0.5);

		startB = this.add.button(this.world.centerX - 55, 585, 'startbutton', this.play, this);
        instructionB = this.add.button(this.world.centerX - 90, 650, 'helpbutton', this.instruction, this);
        
        music = this.add.audio('introSong');
        if(!music.isPlaying){
            music.play();
        }

	},

	update: function () {
        
        if (!music.isPlaying){
            music.play();
        }
		//	Do some nice funky main menu effect here

	},
    
//    playLevelMusic: function(){
//        this.music.play();  
//    },

	play: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		music.stop();

		//	And start the actual game
		this.state.start('Level0');
        
	},
    
    instruction: function (pointer) {
        
        startB.kill();
        instructionB.kill();
        gameInfo = this.add.sprite(200, 50, 'playInfo');
        goBackB = this.add.button(450, 375, 'backbutton', this.goBack, this);
    },
    
    goBack: function(pointer) {
        
        goBackB.kill();
        gameInfo.kill();
        startB = this.add.button(this.world.centerX - 55, 585, 'startbutton', this.play, this);
        instructionB = this.add.button(this.world.centerX - 90, 650, 'helpbutton', this.instruction, this);     
    }

};
