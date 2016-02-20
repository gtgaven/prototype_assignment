window.onload = function() {
<<<<<<< HEAD

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
	game.state.add('MainMenu', Defusal.MainMenu);
	game.state.add('Phase1', Defusal.Phase1);
    game.state.add('Phase2', Defusal.Phase2);
    game.state.add('Phase3', Defusal.Phase3);
	//start the MainMenu state.
	game.state.start('MainMenu');
};
=======
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    //"use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );
    
    
    function preload() {
        
        game.world.setBounds(0, 0, 800, 600);
        // Load an image and call it 'logo'.
        game.load.image( 'ground', 'assets/ground.png' );
        game.load.image( 'sky', 'assets/sky.png' );
        game.load.image( 'trees', 'assets/trees.gif' );
        game.load.image( 'mountain', 'assets/mountain.gif' );
        game.load.image( 'mid', 'assets/mid.gif' );
        game.load.image( 'sun', 'assets/sun.gif' );
        
        game.load.spritesheet('hero', 'assets/hero.png', 50, 70 );
        
        game.load.audio('bass', 'assets/bass.mp3' );
    }
    
    var sky1;
    var sky2
    var ground1;
    var ground2;
    var mid1;
    var mid2
    var trees1;
    var mountain1;
    var mountain2;
    var hero;
    var sun;
    var life = 500;
    var lifeText;
    var endText;
    var sunVelocity = 2;
    var bass;
    
    function create() {
        
        bass = game.add.audio('bass');
        bass.play();
        
        
        lifeText = game.add.text(25, 25, "Life: 500", { fontSize: '32px', fill: '#000' });
        
        var skyLayer = game.add.group();
        skyLayer.z = 0;
        
        var farLayer = game.add.group();
        farLayer.z = 1;
        
        var midLayer = game.add.group();
        midLayer.z = 2;
        
        var groundLayer = game.add.group();
        groundLayer.z = 3;
        
        var frontLayer = game.add.group();//player layer
        frontLayer.z = 4;
        
        hero = frontLayer.create(380, 480, 'hero');
        hero.animations.add('walk', [0, 1]);
        hero.animations.add('left', [2, 3]);
        hero.animations.add('stand', [4]);
        
        sun = new Phaser.Sprite(game, 300, 200, 'sun');
        frontLayer.add(sun);
        frontLayer.add(lifeText);
        
        
        
        
        sky1 = new Phaser.Sprite(game, 0, 0, 'sky');
        skyLayer.add(sky1);
        mid1 = new Phaser.Sprite(game, 0, 250, 'mid' );
        midLayer.add(mid1);
        ground1 = new Phaser.Sprite(game, 0, 550, 'ground' );
        groundLayer.add(ground1);
        trees1 = new Phaser.Sprite(game, 0, 250, 'trees' );
        groundLayer.add(trees1);
        mountain1 = new Phaser.Sprite(game, 0, 150, 'mountain' );
        farLayer.add(mountain1);
        
        
        
        sky2 = new Phaser.Sprite(game, 900, 0, 'sky');
        skyLayer.add(sky2);
        mid2 = new Phaser.Sprite(game, 900, 250, 'mid' );
        midLayer.add(mid2);
        ground2 = new Phaser.Sprite(game, 900, 550, 'ground' );
        groundLayer.add(ground2);
        mountain2 = new Phaser.Sprite(game, 900, 150, 'mountain' );
        farLayer.add(mountain2);
        
        
        
        
        //sprite.animations.add('walk', [0, 1]);
        //sprite.animations.play('walk', 20, true);
        //sprite.scale.set(4);
        //sprite.smoothed = false;
        // Turn on the arcade physics engine for this sprite.
        //game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        //bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        //var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        //var text = game.add.text( game.world.centerX, 15, "Build something awesome.", style );
        //text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        var frontVelocity = 4;
        var midVelocity = 2;
        var farVelocity = 1;
        var backVelocity = .5;
        
        sky1.x -= backVelocity;
        mountain1.x -= farVelocity;
        mid1.x -= midVelocity;
        trees1.x -= frontVelocity;
        ground1.x -= frontVelocity;
        
        sky2.x -= backVelocity;
        mountain2.x -= farVelocity;
        mid2.x -= midVelocity;
        ground2.x -= frontVelocity;
        
        
        if(ground1.x == -900){
            ground1.x = 900;
        }
        if(ground2.x == -900){
            ground2.x = 900;
        }
        if(trees1.x == -900){
            trees1.x = 900;
        }
        /*if(trees2.x == -900){
            trees2.x = 900;
        }*/
        if(mid1.x == -900){
            mid1.x = 900;
        }
        if(mid2.x == -900){
            mid2.x = 900;
        }
        if(sky1.x == -900){
            sky1.x = 900;
        }
        if(sky2.x == -900){
            sky2.x = 900;
        }
        if(mountain1.x == -900){
            mountain1.x = 900;
        }
        if(mountain2.x == -900){
            mountain2.x = 900;
        }
        
        //TODO after some amount of time
        updateSunPosition();
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && hero.x < 750){
            hero.x += 3;
            hero.animations.play('walk', 15, true);
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)&& hero.x > 0){
            hero.x -= 7;
            hero.animations.play('left', 15, true);
        }else if(hero.x > 0){
            hero.x -= frontVelocity;
            hero.animations.play('stand', 1, true);
        }else{
            hero.animations.play('walk', 15, true);
        }
        
        
        if(hero.x > sun.x && hero.x < sun.x+100){
            bass.resume();
            addToScore();
        }else if(life>0){
            bass.pause();
            life-=1;
            lifeText.text = 'Life: '+life;
        }else{
            lifeText.text = 'Life: 0';
            endText = game.add.text(300, 200, "Game Over", { fontSize: '32px', fill: '#ff0000' });
            gameOver();
        }
        
        
        
        
        
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
    }
    
    function addToScore(){
        if(life<500){
            life+=1;
            lifeText.text = 'Life: '+life;
        }
        
    }
    
    function updateSunPosition(){
        if(sun.x<50){
            sunVelocity = 2;
        }if(sun.x>700){
            sunVelocity = -3
        }
        sun.x+=sunVelocity;
    }
    
    function gameOver(){
        
        game.gamePaused();
        
                                    
    }
    
};
>>>>>>> origin/master
