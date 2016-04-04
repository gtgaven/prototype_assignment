/*Bouncy.Level1 = function(game){
    
};


//global vars
var cannon;
var ball;
var catchFlag = false;
var launchVelocity = 0;


Bouncy.Level1.prototype = {
    
    preload: function(){
        this.load.image('analog', 'assets/background.png');
        this.load.image('cannon', 'assets/turret.png');
        this.load.image('ball', 'assets/ball.gif');   
    },
    
    create: function(){
        this.physics.startSystem(Phaser.Physics.ARCADE);

        // set global gravity
        this.physics.arcade.gravity.y = 200;
        this.stage.backgroundColor = '#0072bc';

        var graphics = this.add.graphics(0,0);
        graphics.beginFill(0x049e0c);
        graphics.drawRect(395, 350, 10, 250);

        analog = this.add.sprite(400, 350, 'analog');

        this.physics.enable(analog, Phaser.Physics.ARCADE);

        analog.body.allowGravity = false;
        analog.width = 8;
        analog.rotation = 220;
        analog.alpha = 0;
        analog.anchor.setTo(0.5, 0.0);

        cannon = this.add.sprite(400, 350, 'cannon');

        this.physics.enable(cannon, Phaser.Physics.ARCADE);

        cannon.anchor.setTo(0.1, 0.5);
        cannon.body.moves = false;
        cannon.body.allowGravity = false;
        cannon.alpha = 0;

        ball = this.add.sprite(100, 400, 'ball');
        this.physics.enable(ball, Phaser.Physics.ARCADE);
        ball.anchor.setTo(0.5, 0.5);
        ball.body.collideWorldBounds = false;
        ball.body.bounce.setTo(0.9, 0.9);

        // Enable input.
        ball.inputEnabled = true;
        ball.input.start(0, true);
        ball.events.onInputDown.add(this.set);
        ball.events.onInputUp.add(this.launch);
    },
        
   
        
    update: function(){
        
        cannon.rotation = this.physics.arcade.angleBetween(cannon, ball);
    
        if (catchFlag == true)
        {
            //  Track the ball sprite to the mouse  
            ball.x = this.input.activePointer.worldX;   
            ball.y = this.input.activePointer.worldY;

            cannon.alpha = 1;    
            analog.alpha = 0.5;
            analog.rotation = cannon.rotation - 3.14 / 2;
            analog.height = this.physics.arcade.distanceToPointer(cannon);  
            launchVelocity = analog.height;
        }   
        
    },
    
    render: function(){
        this.debug.text("Drag the ball and release to launch", 32, 32);

        this.debug.bodyInfo(ball, 32, 64);

        // game.debug.spriteInfo(ball, 32, 64);
        // game.debug.text("Launch Velocity: " + parseInt(launchVelocity), 32, 250);
    },
    
     set: function(ball, pointer){
        ball.body.moves = false;
        ball.body.velocity.setTo(0, 0);
        ball.body.allowGravity = false;
        catchFlag = true;
        
    },
        
    launch: function(){
        catchFlag = false;
    
        ball.body.moves = true;
        cannon.alpha = 0;
        analog.alpha = 0;
        Xvector = (cannon.x - ball.x) * 3;
        Yvector = (cannon.y - ball.y) * 3;
        ball.body.allowGravity = true;  
        ball.body.velocity.setTo(Xvector, Yvector);
    }
     
};*/


//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

Bouncy.Level1 = function(game){
    
};


//global vars
var cannon;
var balls;

var fireRate = 1000;//lower number is faster
var nextFire = 0;

Bouncy.Level1.prototype = { 
    
    preload: function(){
        this.load.image('cannon', 'assets/turret.png');
        this.load.image('ball', 'assets/ball.gif');
    },

    create: function(){
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 400;

        this.stage.backgroundColor = '#313131';

        balls = this.add.group();
        balls.enableBody = true;
        balls.physicsBodyType = Phaser.Physics.ARCADE;

        balls.createMultiple(50, 'ball');
        balls.setAll('checkWorldBounds', true);
        balls.setAll('outOfBoundsKill', true);

        cannon = this.add.sprite(400, 300, 'cannon');
        cannon.anchor.set(0.5);

        //this.physics.enable(sprite, Phaser.Physics.ARCADE);
        this.physics.enable(balls, Phaser.Physics.ARCADE);

        cannon.body.allowRotation = false;
    },
    
    update: function(){
        cannon.rotation = this.physics.arcade.angleToPointer(cannon);

        if (this.input.activePointer.isDown)
        {
            this.fire();
        }
    },
    
    fire: function(){
        if (this.time.now > nextFire && balls.countDead() > 0)
        {
            nextFire = this.time.now + fireRate;

            var ball = balls.getFirstDead();

            ball.reset(cannon.x - 8, cannon.y - 8);

            //this.physics.arcade.moveToPointer(ball, 300);
            ball.body.moves = true;
            //cannon.alpha = 0;
            //analog.alpha = 0;
            Xvector = (this.input.mousePointer.x - cannon.x) * 3;
            Yvector = (this.input.mousePointer.y - cannon.y) * 3;
            //ball.body.allowGravity = true;  
            ball.body.velocity.setTo(Xvector, Yvector);
        }
    }
    
    /*render: function(){
        this.debug.text('Active Balls: ' + balls.countLiving() + ' / ' + balls.total, 32, 32);
        this.debug.spriteInfo(sprite, 32, 450);
    }*/

};
