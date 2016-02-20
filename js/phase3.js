Defusal.Phase3 = function(game) {

};

//global vars
var isCorrect;
var explosionsound;

Defusal.Phase3.prototype = {
    
    init: function(input){
        if(input == 1){
            isCorrect = 1;
        }else{
            isCorrect = 0;
        }
    },

	create: function() {
        
        instructions = this.add.text(25, 25, "", { fontSize: '20px', fill: '#fff' });
        
        explosionsound = this.add.audio('explosionsound');
        if(isCorrect == 0){
            explosionsound.play();
        }
        
        
        
        
        

	},
    
    update: function() {
        
       /* keep clock going  */
        
        
       
        
    }
    
    

};