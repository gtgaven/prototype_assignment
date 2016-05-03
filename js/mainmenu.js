var Bouncy = {};

Bouncy.MainMenu = function (game) {

	this.playButton = null;
    //this.wall = null;
};

// global Vars
var background;
var title;
var startB;
var instructionB;
var goBackB;
var gameInfo;

var cannon;
var saucer;
var star;

// Sound Vars.
var shootSound;

var state = 0;

Bouncy.MainMenu.prototype = {
    
    preload: function(){
        this.load.image('spaceTheme', 'assets/spaceTheme.png');
        this.load.image('startbutton', 'assets/startbutton.png');
        this.load.image('helpbutton', 'assets/helpbutton.png');
        this.load.image('backbutton', 'assets/backbutton.png');
        this.load.image('gametitle', 'assets/gametitle.png');
        this.load.image('playInfo', 'assets/playInfo.png');
        
        this.load.audio('introSong', 'assets/spacePhase.mp3');
        this.load.audio('chamberDecompressing', 'assets/chamberDecompressing.mp3')
        
        // Playing Instruction Vars.
        this.load.image('cannon', 'assets/turret.gif');
        this.load.spritesheet('saucer', 'assets/saucer.png', 16, 16 );
        this.load.image('star', 'assets/star.gif');
        
        
        //this.load.audio('correct', 'assets/numkey.wav');
        //this.load.audio('incorrect', 'assets/need_cells.wav');
        //this.load.audio('explosionsound', 'assets/explosion.mp3');
    },

	create: function () {
        
        background = this.add.sprite(0,0, 'spaceTheme');
        title = this.add.sprite(this.world.centerX, this.world.centerY, 'gametitle');
        title.anchor.setTo(0.5, 0.5);

		startB = this.add.button(this.world.centerX - 55, 585, 'startbutton', this.play, this);
        instructionB = this.add.button(this.world.centerX - 90, 650, 'helpbutton', this.instruction, this);
        
        music = this.add.audio('introSong');
        if(!music.isPlaying){
            music.play();
            music.volume = 0.2;
        }
        
        shootSound = this.add.audio('chamberDecompressing');

	},

	update: function () {
        
        if (!music.isPlaying){
            music.play();
        }
        
        if(state == 1)
        {
            var mx = this.input.mousePointer.x;
            var my = this.input.mousePointer.y;
            var power = Math.round(Math.sqrt((mx-cannon.x)*(mx-cannon.x) + (my-cannon.y)*(my-cannon.y)));//sqrt of a-squared + b-squared
            infoText.text = "Power: "+power;
        
            cannon.rotation = this.physics.arcade.angleToPointer(cannon);

            if (this.input.activePointer.isDown)
            {
                saucer.visible = true;
                this.fire();
            }
        
        
            if((saucer.x>star.x) && (saucer.x<star.x+70) && (saucer.y>star.y) && (saucer.y<star.y+70)){
                this.captureStar();
            }
        }
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
        // Sets Up Button Functions.
        title.destroy();
        startB.kill();
        instructionB.kill();
        gameInfo = this.add.sprite(200, 50, 'playInfo');
        goBackB = this.add.button(450, 375, 'backbutton', this.goBack, this);
        
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.setImpactEvents(true);
        
        infoText = this.add.text(20, 500, "Power: 0", { fontSize: '40px', fill: '#fff' });
        star = this.add.sprite(500, 250, 'star');
        saucer = this.add.sprite(300, 400, 'saucer');
        this.physics.enable(saucer, Phaser.Physics.P2JS);
        saucer.physicsBodyType = Phaser.Physics.P2JS;
        saucer.enableBody = true;
        saucer.body.data.gravityScale = .3;
        saucer.animations.add('spin', [0, 1, 2, 3, 4, 5, 6]);
        saucer.visible = false;
        

        cannon = this.add.sprite(300, 400, 'cannon');
        cannon.anchor.set(0.5);
        
        this.physics.p2.gravity.y = 1000;
        this.physics.p2.restitution = 0.8;//"bounce"
        
        state = 1;
    },
    
    goBack: function(pointer) {
        
        goBackB.kill();
        gameInfo.kill();
        infoText.destroy();
        star.destroy();
        saucer.destroy();
        cannon.destroy();
        shootSound.stop();
        
        state = 0;
        
        title = this.add.sprite(this.world.centerX, this.world.centerY, 'gametitle');
        title.anchor.setTo(0.5, 0.5);
        
        startB = this.add.button(this.world.centerX - 55, 585, 'startbutton', this.play, this);
        instructionB = this.add.button(this.world.centerX - 90, 650, 'helpbutton', this.instruction, this);
    },
    
    fire: function(){
        numShots++;
        shootSound.play();
        saucer.reset(cannon.x - 8, cannon.y - 8);
        Xvector = (this.input.mousePointer.x - cannon.x);
        Yvector = (this.input.mousePointer.y - cannon.y);
        saucer.body.velocity.x = Xvector;
        saucer.body.velocity.y = Yvector;
        saucer.animations.play('spin', 15, true);
    },
    
    captureStar: function(){
    },

};
