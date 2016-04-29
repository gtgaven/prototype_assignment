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
        text = this.add.text(25, 25, "You beat the trial version! \nUnlock the deluxe pack for just $0.99", { fontSize: '20px', fill: '#fff' });
       
    }
};