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
var bomb;
var time;
var timeText;

Defusal.Phase3.prototype = {
    
    init: function(correct, code, t){
        if(correct == 1){
            isCorrect = 1;
        }else{
            isCorrect = 0;
        }
        winningCode = code;
        
        time = t;
        
    },
    
    preload: function(){
        this.load.spritesheet('wirecutter', 'assets/wirecutter.gif', 300, 300 );
    },

	create: function() {
        
        var background = this.add.group();
        background.z = 0;
        bomb = new Phaser.Sprite(this, 0, 0, 'bomb');
        background.add(bomb);
        
        var foreground = this.add.group();
        foreground.z = 1;
        wirecutterRed = foreground.create(200, 250, 'wirecutter');
        wirecutterBlue = foreground.create(560, 200, 'wirecutter');
        
        
        instructions = this.add.text(25, 25, "", { fontSize: '20px', fill: '#fff' });
        timeText = this.add.text(25, 60, "Timer: "+time, { fontSize: '20px', fill: '#fff' });
        wirecutterRed.animations.add('cut', [0, 1, 2]);
        wirecutterBlue.animations.add('cut', [0, 1, 2]);
        
        wirecutterRed.inputEnabled = true;
        wirecutterBlue.inputEnabled = true;
        
        explosionsound = this.add.audio('explosionsound');
        if(isCorrect == 0){
            explosionsound.play();
            lose = this.add.text(100, 300, "You have failed. This bomb's code was "+winningCode, { fontSize: '38px', fill: '#f00'});
            wirecutterRed.kill();
            wirecutterBlue.kill();
            bomb.kill();
            //delay = this.time.now+2000;
            
        }else{
            success = this.add.text(100, 500, "By some miracle, you figured out the code!\nChoose the red or blue wire...", { fontSize: '38px', fill: '#fff'});
        }
        
         winnable = this.game.rnd.integerInRange(0, 9);
        
        
        
        
        

	},
    
    update: function() {
        
        timeText.text = "Timer: "+time;
        if(isCorrect == 1){
            time--;
        }
        if(time < 0){
            //var code = ""+digit1+" "+digit2+" "+digit3+" "+digit4;
            time = 0;
            isCorrect = 0;
            explosionsound.play();
            lose = this.add.text(100, 300, "You have failed by running out of time", { fontSize: '38px', fill: '#f00'});
            success.text = "";
            wirecutterRed.kill();
            wirecutterBlue.kill();
            bomb.kill();
        }
       /* keep clock going  */
        if(isCorrect == 0){
            
            //if(delay<this.time.now){
                //this.state.start('MainMenu');
            //}
        }else{
            if(wirecutterBlue.input.pointerDown()){//pointerOver?
                wirecutterBlue.animations.play('cut', 3, false);
                this.cutTheWire(0);//0 is blue
                wirecutterRed.kill();
                //kill red
                //call final function
            }
            if(wirecutterRed.input.pointerDown()){//pointerOver?
                wirecutterRed.animations.play('cut', 3, false);
                this.cutTheWire(1);//1 is red
                wirecutterBlue.kill();
                //kill blue
                //call final function
            }
    
        }
        
        
        
       
        
    },
    
    cutTheWire: function(a){//0 is blue, 1 is red
        if(winnable < 8){//want to 'guess' correctly more than half the time
            success.text = "HOORAY!! YOU DEFUSED THE BOMB!";
            //delay = this.time.now+2000;
            isCorrect = 0;
            
            //YOU WIN
        }else{
            if(a == 0){
                //correct wire is red
                success.text = "";
                
                lose = this.add.text(100, 50, "You have failed. \nMaybe you should have cut the red wire.", { fontSize: '38px', fill: '#f00'});
                //wirecutterBlue.kill();
                //wirecutterRed.kill();
                bomb.kill();
                //delay = this.time.now+2000;
                isCorrect = 0;
                explosionsound.play();
            }else{
                //correct wire is blue
                success.text = "";
                
                lose = this.add.text(100, 50, "You have failed. \nMaybe you should have cut the blue wire.", { fontSize: '38px', fill: '#f00'});
                //wirecutterBlue.kill();
                //wirecutterRed.kill();
                bomb.kill();
                //delay = this.time.now+2000;
                isCorrect = 0;
                explosionsound.play();
            }
        }
    }
    
    
    
    
    

};