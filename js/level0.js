
Bouncy.Level0 = function(game){//************************************************
};
//global vars
var cannon;
var saucer;
var star;
var numShots = 0;
var map;
var layer;
var infoText;

Bouncy.Level0.prototype = { //****************************************************
    
    preload: function(){
        this.load.tilemap('level_0', 'assets/tutorial.json', null, Phaser.Tilemap.TILED_JSON);//the JSON file stored in assets/**************************************
        this.load.image('tiles', 'assets/tiles.png');//just a png of the set of tiles to be used
        this.load.image('cannon', 'assets/turret.gif');
        this.load.spritesheet('saucer', 'assets/saucer.png', 16, 16 );
        this.load.image('star', 'assets/star.gif');
    },

    create: function(){
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.setImpactEvents(true);//so that collisions can call functions
        map = this.add.tilemap('level_0');//****************************************************************
        this.stage.backgroundColor = '#787878';
        map.addTilesetImage('Tile Map', 'tiles');//adding the tiles.png to the name specified in JSON under field "tilesets"
        infoText = this.add.text(20, 500, "Power: 0", { fontSize: '40px', fill: '#fff' });
        
        star = this.add.sprite(375, 710, 'star');
        
        saucer = this.add.sprite(500, 370, 'saucer');
        this.physics.enable(saucer, Phaser.Physics.P2JS);
        saucer.physicsBodyType = Phaser.Physics.P2JS;
        saucer.enableBody = true;
        saucer.body.data.gravityScale = .3;
        saucer.animations.add('spin', [0, 1, 2, 3, 4, 5, 6]);
        saucer.visible = false;
        

        cannon = this.add.sprite(350, 150, 'cannon');//*****************************************************************
        cannon.anchor.set(0.5);
        
        layer = map.createLayer('Tile Layer 1');//field directly following the coordinates was working with 'Tile Layer 1'
        layer.resizeWorld();
        
        layer.debug = true;//to see the collision spaces
        this.physics.p2.convertTilemap(map, layer);
        this.physics.p2.gravity.y = 1000;
        this.physics.p2.restitution = 0.8;//"bounce"
        
        var objLayer1 = this.physics.p2.convertCollisionObjects(map, "Object Layer 1", true);
        //var objLayer2 = this.physics.p2.convertCollisionObjects(map, "Object Layer 2", true);
        //var objLayer3 = this.physics.p2.convertCollisionObjects(map, "Object Layer 3", true);
        
    },
    
    update: function(){
        
        
        
        var mx = this.input.mousePointer.x;
        var my = this.input.mousePointer.y;
        var power = Math.round(Math.sqrt((mx-cannon.x)*(mx-cannon.x) + (my-cannon.y)*(my-cannon.y)));//sqrt of a-squared + b-squared
        infoText.text = "Power: "+power;
        
        cannon.rotation = this.physics.arcade.angleToPointer(cannon);

        if (this.input.activePointer.isDown)
        {
            saucer.visible = true;
            this.fire();
        }
        
        
        if((saucer.x>star.x) && (saucer.x<star.x+70) && (saucer.y>star.y) && (saucer.y<star.y+70)){
            this.captureStar();
        }
    },
    
    fire: function(){
        numShots++;
        saucer.reset(cannon.x - 8, cannon.y - 8);
        Xvector = (this.input.mousePointer.x - cannon.x);
        Yvector = (this.input.mousePointer.y - cannon.y);
        saucer.body.velocity.x = Xvector;
        saucer.body.velocity.y = Yvector;
        saucer.animations.play('spin', 15, true);
    },
    
    captureStar: function(){
        this.state.start('Level1', true, false, 0, numShots);//*****************************************
    },

};
