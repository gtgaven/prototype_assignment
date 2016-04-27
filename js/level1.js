
Bouncy.Level1 = function(game){
    
};


//global vars
var cannon;
var balls;
var saucer;
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
var infoText;

Bouncy.Level1.prototype = { 
    
    preload: function(){
        this.load.tilemap('level_1', 'assets/Eggplant Level.json', null, Phaser.Tilemap.TILED_JSON);//the JSON file stored in assets/
        this.load.image('tiles', 'assets/tiles.png');//just a png of the set of tiles to be used
        this.load.image('cannon', 'assets/turret.gif');
        //this.load.image('ball', 'assets/saucer.png');
        this.load.spritesheet('saucer', 'assets/saucer.png', 16, 16 );
        this.load.image('star', 'assets/star.gif');
    },

    create: function(){
        this.physics.startSystem(Phaser.Physics.P2JS);
        //this.physics.p2.gravity.y = 2;
        //this.physics.arcade.gravity.y = 1000;
        map = this.add.tilemap('level_1');
        this.stage.backgroundColor = '#787878';
        
        map.addTilesetImage('Tile Map', 'tiles');//adding the tiles.png to the name specified in JSON under field "tilesets"
        
        infoText = this.add.text(20, 500, "Power: 0", { fontSize: '40px', fill: '#fff' });
        
        

        
        star = this.add.sprite(500, 100, 'star');
        /*this.physics.enable(star, Phaser.Physics.ARCADE);
        star.anchor.set(0.5);
        star.enableBody = true;
        star.body.collideWorldBounds = true;
        star.body.immovable = true;
        star.body.allowGravity = false;*/
        
        /*******/
        
       /* balls = this.add.group();
        
        balls.enableBody = true;
        balls.physicsBodyType = Phaser.Physics.P2JS;

        balls.createMultiple(50, 'ball');
        balls.setAll('checkWorldBounds', true);
        balls.setAll('outOfBoundsKill', true);*/
        
        
        
        saucer = this.add.sprite(500, 350, 'saucer');
        this.physics.enable(saucer, Phaser.Physics.P2JS);
        saucer.physicsBodyType = Phaser.Physics.P2JS;
        saucer.enableBody = true;
        saucer.body.data.gravityScale = .3;
        //saucer.set('checkWorldBounds', true);
        //saucer.set('outOfBoundsKill', true);
       // saucer.checkWorldBounds = true;
        saucer.animations.add('spin', [0, 1, 2, 3, 4, 5, 6]);
        

        cannon = this.add.sprite(60, 50, 'cannon');
        cannon.anchor.set(0.5);
        
        layer = map.createLayer('Tile Layer 1');//field directly following the coordinates was working with 'Tile Layer 1'
        layer.resizeWorld();
        
        
        
       // map.setCollisionBetween(3, 300);//i THINK this should be a set of surfaces that should be collide-able; 251 is the flat horiz one
        //map.setCollision(213);
        layer.debug = true;//to see the collision spaces
        this.physics.p2.convertTilemap(map, layer);
        this.physics.p2.gravity.y = 1000;
        this.physics.p2.restitution = 0.8;//"bounce"
        //this.physics.p2.enable(balls);
        //this.physics.p2.convertCollisionObjects(map, layer, addToWorld);//NOT WORKING
        
        var objLayer1 = this.physics.p2.convertCollisionObjects(map, "Object Layer 1", true);
        var objLayer2 = this.physics.p2.convertCollisionObjects(map, "Object Layer 2", true);
        var objLayer3 = this.physics.p2.convertCollisionObjects(map, "Object Layer 3", true);
    },
    
    update: function(){
        
       var mx = this.input.mousePointer.x;
        var my = this.input.mousePointer.y;
        var power = Math.round(Math.sqrt((mx-cannon.x)*(mx-cannon.x) + (my-cannon.y)*(my-cannon.y)));
        infoText.text = "Power: "+power;
        
        cannon.rotation = this.physics.arcade.angleToPointer(cannon);

        if (this.input.activePointer.isDown)
        {
            this.fire();
        }
    },
    
    fire: function(){
        /*if (this.time.now > nextFire && balls.countDead() > 0)
        {
            numShots++;
            nextFire = this.time.now + fireRate;

            var ball = balls.getFirstDead();

            ball.reset(cannon.x - 8, cannon.y - 8);
            Xvector = (this.input.mousePointer.x - cannon.x) * 3;
            Yvector = (this.input.mousePointer.y - cannon.y) * 3;
            ball.body.velocity.x = Xvector;
            ball.body.velocity.y = Yvector;
            
        }*/
        saucer.reset(cannon.x - 8, cannon.y - 8);
        Xvector = (this.input.mousePointer.x - cannon.x);
        Yvector = (this.input.mousePointer.y - cannon.y);
        saucer.body.velocity.x = Xvector;
        saucer.body.velocity.y = Yvector;
        saucer.animations.play('spin', 15, true);
    },
    
        
    ballHitWall: function(){
        //wall1.kill();
        
    },
    
    captureStar: function(){
        this.state.start('Finish', true, false, 0, numShots);
    },

};
