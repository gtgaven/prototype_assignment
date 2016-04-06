
Bouncy.Level1 = function(game){
    
};


//global vars
var cannon;
var balls;
var walls;
var fireRate = 1000;//lower number is faster
var nextFire = 0;
var wall1;
var wall2;
var wall3;
var star;
var numShots = 0;

Bouncy.Level1.prototype = { 
    
    preload: function(){
        this.load.image('cannon', 'assets/turret.png');
        this.load.image('ball', 'assets/ball.gif');
        this.load.image('wall_horz', 'assets/wall_horz.gif');
        this.load.image('wall_vert', 'assets/wall_vert.gif');
        this.load.image('star', 'assets/star.gif');
    },

    create: function(){
        //this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 1000;

        this.stage.backgroundColor = '#313131';
        
        

        
        star = this.add.sprite(500, 100, 'star');
        this.physics.enable(star, Phaser.Physics.ARCADE);
        star.anchor.set(0.5);
        star.enableBody = true;
        star.body.collideWorldBounds = true;
        star.body.immovable = true;
        star.body.allowGravity = false;
        
        /*******/
        balls = this.add.group();
        balls.enableBody = true;
        balls.physicsBodyType = Phaser.Physics.ARCADE;

        balls.createMultiple(50, 'ball');
        balls.setAll('checkWorldBounds', true);
        balls.setAll('outOfBoundsKill', true);
        

        cannon = this.add.sprite(500, 400, 'cannon');
        cannon.anchor.set(0.5);

            
        wall1 = this.add.sprite(500, 30, 'wall_horz');
        wall1.anchor.set(0.5);
        wall2 = this.add.sprite(500, 300, 'wall_horz');
        wall2.anchor.set(0.5);
        wall3 = this.add.sprite(600, 650, 'wall_horz');
        wall3.anchor.set(0.5);
        wall4 = this.add.sprite(900, 200, 'wall_vert');
        wall4.anchor.set(0.5);
        
        this.physics.enable([wall1, wall2, wall3, wall4], Phaser.Physics.ARCADE);
        this.setupWall(wall1);
        this.setupWall(wall2);
        this.setupWall(wall3);
        this.setupWall(wall4);
        
        
        
        
        //wall1.body.collideWorldBounds = true;
	    //wall1.body.checkCollision.up = true;
	    //wall1.body.checkCollision.down = true;
	    //wall1.body.immovable = true;
        
        //this.physics.enable(sprite, Phaser.Physics.ARCADE);
        this.physics.enable(balls, Phaser.Physics.ARCADE);
        //this.physics.enable(wall1, Phaser.Physics.ARCADE);
        //this.physics.enable(wall2, Phaser.Physics.ARCADE);
        //this.physics.enable(wall3, Phaser.Physics.ARCADE);
        
        
        
        //cannon.body.allowRotation = false;
    },
    
    update: function(){
        
        
        cannon.rotation = this.physics.arcade.angleToPointer(cannon);
        this.physics.arcade.collide(wall1, balls, this.ballHitWall, null, this);
        this.physics.arcade.collide(wall2, balls, this.ballHitWall, null, this);
        this.physics.arcade.collide(wall3, balls, this.ballHitWall, null, this);
        this.physics.arcade.collide(wall4, balls, this.ballHitWall, null, this);
        this.physics.arcade.collide(star, balls, this.captureStar, null, this);
        //this.physics.arcade.collide(wall1, balls);
        //this.physics.arcade.collide(wall2, ball);
        //this.physics.arcade.collide(wall3, ball);

        if (this.input.activePointer.isDown)
        {
            this.fire();
        }
    },
    
    fire: function(){
        if (this.time.now > nextFire && balls.countDead() > 0)
        {
            numShots++;
            nextFire = this.time.now + fireRate;

            var ball = balls.getFirstDead();

            ball.reset(cannon.x - 8, cannon.y - 8);

            //this.physics.arcade.moveToPointer(ball, 300);
            ball.body.moves = true;
            ball.body.bounce.set(1);
            //cannon.alpha = 0;
            //analog.alpha = 0;
            Xvector = (this.input.mousePointer.x - cannon.x) * 3;
            Yvector = (this.input.mousePointer.y - cannon.y) * 3;
            //ball.body.allowGravity = true;  
            ball.body.velocity.setTo(Xvector, Yvector);
            
            
        }
    },
    
        
    ballHitWall: function(){
        //wall1.kill();
        
    },
    
    captureStar: function(){
        this.state.start('Finish', true, false, 0, numShots);
    },
    
    setupWall: function(a){
        a.enableBody = true;
        a.body.collideWorldBounds = true;
        a.body.bounce.set(1);
        a.body.immovable = true;
        a.body.allowGravity = false;
    }
    
    
    
    /*render: function(){
        this.debug.text('Active Balls: ' + balls.countLiving() + ' / ' + balls.total, 32, 32);
        this.debug.spriteInfo(sprite, 32, 450);
    }*/

};
