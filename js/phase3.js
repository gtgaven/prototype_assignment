Defusal.Phase3 = function(game) {

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

Defusal.Phase3.prototype = {
    
    init: function(correct, code){
        if(correct == 1){
            isCorrect = 1;
        }else{
            isCorrect = 0;
        }
        winningCode = code;
    },
    
    preload: function(){
        this.load.spritesheet('wirecutter', 'assets/wirecutter.gif', 300, 300 );
    },

	create: function() {
        
        var background = this.add.group();
        background.z = 0;
        var bomb = new Phaser.Sprite(this, 0, 0, 'bomb');
        background.add(bomb);
        
        var foreground = this.add.group();
        foreground.z = 1;
        wirecutterRed = foreground.create(200, 250, 'wirecutter');
        wirecutterBlue = foreground.create(560, 200, 'wirecutter');
        
        
        instructions = this.add.text(25, 25, "", { fontSize: '20px', fill: '#fff' });
        wirecutterRed.animations.add('cut', [0, 1, 2]);
        wirecutterBlue.animations.add('cut', [0, 1, 2]);
        
        wirecutterRed.inputEnabled = true;
        wirecutterBlue.inputEnabled = true;
        
        explosionsound = this.add.audio('explosionsound');
        if(isCorrect == 0){
            explosionsound.play();
            lose = this.add.text(100, 300, "You have failed. This bomb's code was "+winningCode+"\nreturning to main menu...", { fontSize: '38px', fill: '#f00'});
            delay = this.time.now+2000;
            
        }else{
            success = this.add.text(100, 500, "By some miracle, you figured out the code!\nChoose the red or green wire...", { fontSize: '38px', fill: '#fff'});
        }
        
         winnable = this.game.rnd.integerInRange(0, 9);
        
        
        
        
        

	},
    
    update: function() {
        
       /* keep clock going  */
        if(isCorrect == 0){
            if(delay<this.time.now){
                this.state.start('MainMenu');
            }
        }else{
            if(wirecutterBlue.input.pointerDown()){//pointerOver?
                wirecutterBlue.animations.play('cut', 3, false);
                cutTheWire(0);//0 is blue
                //kill red
                //call final function
            }
            if(wirecutterRed.input.pointerDown()){//pointerOver?
                wirecutterRed.animations.play('cut', 3, false);
                cutTheWire(1);//1 is red
                //kill blue
                //call final function
            }
    
        }
        
        
        
       
        
    },
    
    cutTheWire: function(int a){//0 is blue, 1 is red
        if(winnable < 8){//want to 'guess' correctly more than half the time
            success.text = "HOORAY!! YOU DEFUSED THE BOMB!";
            //YOU WIN
        }else{
            if(a == 0){
                //correct wire is red
                success.text = "";
                explosionsound.play();
                lose = this.add.text(100, 300, "You have failed. Maybe you should have cut the red wire.\nreturning to main menu...", { fontSize: '38px', fill: '#f00'});
                delay = this.time.now+2000;
                isCorrect = 0;
            }else{
                //correct wire is blue
                success.text = "";
                explosionsound.play();
                lose = this.add.text(100, 300, "You have failed. Maybe you should have cut the blue wire.\nreturning to main menu...", { fontSize: '38px', fill: '#f00'});
                delay = this.time.now+2000;
                isCorrect = 0;
            }
        }
    }
    
    
    
    
    

};