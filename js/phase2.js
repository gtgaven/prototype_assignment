Defusal.Phase2 = function(game) {
    this.checkButton = null;
};

//global vars

var instructions;
var background;
var textbox1;
var textbox2;
var textbox3;
var textbox4;
var text;
var explosionsound;

var digit1;
var digit2;
var digit3;
var digit4;

var guess1;
var guess2;
var guess3;
var guess4;
var time;
var timeText;
var code;

var currentGuess = 0;

Defusal.Phase2.prototype = {
    
    init: function(first, second, third, fourth, t){
        digit1 = first;
        digit2 = second;
        digit3 = third;
        digit4 = fourth;
        code = ""+first+" "+second+" "+third+" "+fourth;
        time = t;
    },

    preload: function(){
        this.load.image('checkButton', 'assets/checkButton.gif');
    },

	create: function() {
        
        var background = this.add.group();
        background.z = 0;
        var bomb = new Phaser.Sprite(this, 0, 0, 'bomb');
        background.add(bomb);
        
        instructions = this.add.text(25, 25, "Type code in correct order!", { fontSize: '20px', fill: '#fff' });
        timeText = this.add.text(25, 60, "Timer: "+time, { fontSize: '20px', fill: '#fff' });
        textbox1 = this.add.text(240, 150, "*", { fontSize: '40px', fill: '#fff' });
        textbox2 = this.add.text(340, 150, "*", { fontSize: '40px', fill: '#fff' });
        textbox3 = this.add.text(450, 150, "*", { fontSize: '40px', fill: '#fff' });
        textbox4 = this.add.text(570, 150, "*", { fontSize: '40px', fill: '#fff' });
        text = this.add.text(100, 500, "", { fontSize: '40px', fill: '#fff' });
        explosionsound = this.add.audio('explosionsound');
        
        
        key0 = this.game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
        key0.onDown.add(this.press0, this);
        
        key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        key1.onDown.add(this.press1, this);

        key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        key2.onDown.add(this.press2, this);

        key3 = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);
        key3.onDown.add(this.press3, this);
        
        key4 = this.game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
        key4.onDown.add(this.press4, this);

        key5 = this.game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
        key5.onDown.add(this.press5, this);

        key6 = this.game.input.keyboard.addKey(Phaser.Keyboard.SIX);
        key6.onDown.add(this.press6, this);
        
        key7 = this.game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
        key7.onDown.add(this.press7, this);

        key8 = this.game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
        key8.onDown.add(this.press8, this);

        key9 = this.game.input.keyboard.addKey(Phaser.Keyboard.NINE);
        key9.onDown.add(this.press9, this);
        
        
        
        this.checkButton = this.add.button(530, 280, 'checkButton', this.checkCode, this);
        this.checkButton.visible = false;

	},
    
    update: function() {
        
       /* keep clock going  */
        
        timeText.text = "Timer: "+time;
        time--;
        
        if(time < 0){
            //var code = ""+digit1+" "+digit2+" "+digit3+" "+digit4;
            this.state.start('Phase3', true, false, 0,  code, time);
        }
        
        if(currentGuess >= 4){
            this.checkButton.visible = true;
            text.text = "PRESS THE GREEN BUTTON!!";
        }
        
    },
    
    checkCode: function(){
        if(guess1 == digit1 && guess2 == digit2 && guess3 == digit3 && guess4 == digit4){
            this.state.start('Phase3', true, false, 1, code, time);
        }else{
            this.state.start('Phase3', true, false, 0, code, time);
            
        }
        
    },
    
    
    
    press0: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 0;
            textbox1.text = 0;
        }else if(currentGuess == 2){
            guess2 = 0;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 0;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 0;
            textbox4.text = guess4;
        }
    },
    
    press1: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 1;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 1;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 1;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 1;
            textbox4.text = guess4;
        }
        
    },
    press2: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 2;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 2;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 2;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 2;
            textbox4.text = guess4;
        }
        
    },
    press3: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 3;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 3;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 3;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 3;
            textbox4.text = guess4;
        }
        
    },
    press4: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 4;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 4;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 4;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 4;
            textbox4.text = guess4;
        }
        
    },
    press5: function(){
       currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 5;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 5;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 5;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 5;
            textbox4.text = guess4;
        }
        
    },
    press6: function(){
       currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 6;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 6;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 6;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 6;
            textbox4.text = guess4;
        }
        
    },
    press7: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 7;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 7;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 7;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 7;
            textbox4.text = guess4;
        }
        
    },
    press8: function(){
        currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 8;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 8;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 8;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 8;
            textbox4.text = guess4;
        }
        
    },
    press9: function(){
       currentGuess++;
        
        if(currentGuess == 1){
            guess1 = 9;
            textbox1.text = guess1;
        }else if(currentGuess == 2){
            guess2 = 9;
            textbox2.text = guess2;
        }else if(currentGuess == 3){
            guess3 = 9;
            textbox3.text = guess3;
        }else if(currentGuess == 4){
            guess4 = 9;
            textbox4.text = guess4;
        }
        
    }
    
    

};