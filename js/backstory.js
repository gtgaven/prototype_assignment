Bouncy.Backstory = function(game) {
    this.continuebutton=null;
};

//global vars
var isCorrect;
var explosionsound;
var lose;
var success;
var winningCode;
var delay;
var wirecutterRed;
var wirecutterBlue;
var winnable;
var time;
var timeText;

var stickdude;
var back;
var infotext;

Bouncy.Backstory.prototype = {
    
    preload: function(){
        this.load.spritesheet('stickdude', 'assets/stickdude.png', 50, 70 );
        this.load.image('back', 'assets/background.png', 0, 0);
        this.load.image('ball', 'assets/ball.gif', 100,100);
                        
        
    },

	create: function() {
        
        var background = this.add.group();
        background.z = 0;
        back = new Phaser.Sprite(this, 0, 0, 'back');
        background.add(back);    
        
        var foreground = this.add.group();
        foreground.z = 1;
        stickdude = foreground.create(200, 600, 'stickdude');
        
        stickdude.animations.add('right', [0, 1]);
        stickdude.animations.add('left', [2, 3]);
        stickdude.animations.add('stand', [4]);
        
        infotext = this.add.text(25, 25, "I can't find my bouncy ball! I've\nlooked everywhere )':", { fontSize: '20px', fill: '#000' });
            
        this.button = this.add.button(530, 280, 'button', this.nextPart, this);
        this.button.visible = false;
        
        foreground.add(button);

	},
    
    update: function() {
        if(stickdude.x < 900){
            stickdude.x+=3;
            stickdude.animations.play('right', 8, true);
        }else{
            stickdude.animations.play('stand', 1, true);
            infotext.text = "WHERE DID MY BOUNCY BALL GO?!!?!?!?\n (*drama intensifies*)";
            this.button.visible = true;
        }
    },
        
    nextPart: function() {
        
    }
    
    
};