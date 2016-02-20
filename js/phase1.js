Defusal.Phase1 = function(game) {

};

//global vars

var instructions;
var guessesLeftText;
var textbox1;
var textbox2;
var textbox3;
var textbox4;

var digit1;
var digit2;
var digit3;
var digit4;
var flippingInt1 = 0;
var flippingInt2 = 2;
var flippingInt3 = 4;
var flippingInt4 = 6;

var wrongGuessesLeft = 5;
var correct1 = 0;
var correct2 = 0;
var correct3 = 0;
var correct4 = 0;

var correctSound;
var incorrectSound;

//var timer, timerEvent;



Defusal.Phase1.prototype = {
    
    

	create: function() {
        //display bomb sprite, timer etc
        
        instructions = this.add.text(25, 25, "Use number keys to guess the correct code!", { fontSize: '20px', fill: '#fff' });
        guessesLeftText = this.add.text(600, 50, "Threshold: " + wrongGuessesLeft, { fontSize: '20px', fill: '#a00' });
        textbox1 = this.add.text(200, 200, "0", { fontSize: '40px', fill: '#fff' });
        textbox2 = this.add.text(250, 200, "0", { fontSize: '40px', fill: '#fff' });
        textbox3 = this.add.text(300, 200, "0", { fontSize: '40px', fill: '#fff' });
        textbox4 = this.add.text(350, 200, "0", { fontSize: '40px', fill: '#fff' });
        correctSound = this.add.audio('correct');
        incorrectSound = this.add.audio('incorrect');
        
        this.getNewCode();
        
        //timer = this.time.create();
        
        
        
        //timerEvent = timer.add(Phaser.Timer.SECOND * 30, this.state.start('Phase3', true, false), this);
        
        //timer.start();
        
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
        
        

	},
    
    update: function() {
        
        this.updateFlipping();
        
        
        
        
        
        guessesLeftText.text = "Threshold: "+wrongGuessesLeft;
        //when the 4th number gets got:
        if(correct1 == 1){
            textbox1.text = digit1;
        }
        if(correct2 == 1){
            textbox2.text = digit2;
        }
        if(correct3 == 1){
            textbox3.text = digit3;
        }
        if(correct4 == 1){
            textbox4.text = digit4;
        }
        
        if(correct1 == 1 && correct2 == 1 && correct3 == 1 && correct4 == 1){
            
            
             this.state.start('Phase2', true, false, digit1, digit2, digit3, digit4);
        }
        if(wrongGuessesLeft < 1){
             this.state.start('Phase2', true, false, digit1, digit2, digit3, digit4);
        }
        
    },
    
    
    getNewCode: function(){
        //get 4 unique random digits
        
        digit1 = this.game.rnd.integerInRange(0, 9);
        var candidate = this.game.rnd.integerInRange(0, 9);
        while(candidate == digit1){
            candidate = this.game.rnd.integerInRange(0, 9);
        }
        digit2 = candidate;
        candidate = this.game.rnd.integerInRange(0, 9);
        while(candidate == digit1 || candidate == digit2){
            candidate = this.game.rnd.integerInRange(0, 9);
        }
        digit3 = candidate;
        candidate = this.game.rnd.integerInRange(0, 9);
        while(candidate == digit1 || candidate == digit2 || candidate == digit3){
            candidate = this.game.rnd.integerInRange(0, 9);
        }
        digit4 = candidate;
    },
    
    updateFlipping: function(){
        flippingInt1++;
        flippingInt2++;
        flippingInt3++;
        flippingInt4++;
        if(flippingInt1 >=10){
            flippingInt1 = 0;
        }
        if(flippingInt2 >=10){
            flippingInt2 = 0;
        }
        if(flippingInt3 >=10){
            flippingInt3 = 0;
        }
        if(flippingInt4 >=10){
            flippingInt4 = 0;
        }
        textbox1.text = flippingInt1;
        textbox2.text = flippingInt2;
        textbox3.text = flippingInt3;
        textbox4.text = flippingInt4;
    },
    
    
    press0: function(){
        if(digit1 == 0){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 0){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 0){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 0){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
    },
    
    press1: function(){
        if(digit1 == 1){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 1){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 1){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 1){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
            incorrectSound.play();
        }
    },
    press2: function(){
        if(digit1 == 2){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 2){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 2){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 2){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press3: function(){
        if(digit1 == 3){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 3){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 3){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 3){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press4: function(){
        if(digit1 == 4){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 4){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 4){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 4){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
           // guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press5: function(){
        if(digit1 == 5){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 5){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 5){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 5){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
           // guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press6: function(){
        if(digit1 == 6){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 6){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 6){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 6){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
           // guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press7: function(){
        if(digit1 == 7){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 7){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 7){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 7){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press8: function(){
        if(digit1 == 8){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 8){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 8){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 8){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    },
    press9: function(){
        if(digit1 == 9){
            correct1 = 1;
            correctSound.play();
        }
        else if(digit2 == 9){
            correct2 = 1;
            correctSound.play();
        }
        else if(digit3 == 9){
            correct3 = 1;
            correctSound.play();
        }
        else if(digit4 == 9){
            correct4 = 1;
            correctSound.play();
        }
        else{
            wrongGuessesLeft--;
            incorrectSound.play();
            //guessesLeftText.text = "Errors Remaining: "+wrongGuessesLeft;
        }
        
    }
    
    

};