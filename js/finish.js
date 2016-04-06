Bouncy.Finish = function(game) {
    
};

//global vars
var shots;
var text;
Bouncy.Finish.prototype = {
    
    init: function(s){
        shots = s;
    },

    preload: function(){
       // this.load.image('checkButton', 'assets/checkButton.gif');
    },

	create: function() {
        
       

	},
    
    update: function() {
        text = this.add.text(25, 25, "You beat level 1! More levels to come...", { fontSize: '20px', fill: '#fff' });
       
    }
};