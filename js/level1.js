
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
var map;
var layer;

Bouncy.Level1.prototype = { 
    
    preload: function(){
        this.load.tilemap('test_level', 'assets/test_level.json', null, Phaser.Tilemap.TILED_JSON);//the JSON file stored in assets/
        this.load.image('tiles', 'assets/tiles.png');//just a png of the set of tiles to be used
        this.load.image('cannon', 'assets/turret.png');
        this.load.image('ball', 'assets/ball.gif');
        this.load.image('star', 'assets/star.gif');
    },

    create: function(){
        this.physics.startSystem(Phaser.Physics.P2JS);
        //this.physics.arcade.gravity.y = 1000;
        map = this.add.tilemap('test_level');
        this.stage.backgroundColor = '#787878';
        
        map.addTilesetImage('Tile Map', 'tiles');//adding the tiles.png to the name specified in JSON under field "tilesets"
        
        

        
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
        balls.physicsBodyType = Phaser.Physics.P2JS;

        balls.createMultiple(50, 'ball');
        balls.setAll('checkWorldBounds', true);
        balls.setAll('outOfBoundsKill', true);
        

        cannon = this.add.sprite(500, 400, 'cannon');
        cannon.anchor.set(0.5);
        
        layer = map.createLayer('Tile Layer 1');//field directly following the coordinates
        layer.resizeWorld();
        
        
        map.setCollision(251);
        this.physics.p2.convertTilemap(map, layer);
        this.physics.p2.gravity.y = 1000;
        this.physics.p2.restitution = 0.8;//"bounce"
        this.physics.p2.enable(balls);
        
        
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
            numShots++;
            nextFire = this.time.now + fireRate;

            var ball = balls.getFirstDead();

            ball.reset(cannon.x - 8, cannon.y - 8);
            Xvector = (this.input.mousePointer.x - cannon.x) * 3;
            Yvector = (this.input.mousePointer.y - cannon.y) * 3;
            ball.body.velocity.x = Xvector;
            ball.body.velocity.y = Yvector;
            
            
        }
    },
    
        
    ballHitWall: function(){
        //wall1.kill();
        
    },
    
    captureStar: function(){
        this.state.start('Finish', true, false, 0, numShots);
    },

};
