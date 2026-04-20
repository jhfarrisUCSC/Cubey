class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        // Create variables to hold constant values for sprite locations
        this.bodyX = 400;
        this.bodyY = 350;

        // Define the locations of the smile and hands relative to the
        // main body location. This way, if we change the main body
        // location, the other values update too.
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.leftHandX = this.bodyX - 125;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 125;
        this.rightHandY = this.bodyY + 20;
        
        this.counter = 0;
        this.smileType = 'Smile';
    }

    preload() {
        
    }

    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");
        my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
        
        // Create the sprite for the left and right hands
        // Handedness is from the player's perspective, not Cubey's
        my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "handOpen");
        my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "handOpen");

        // Since sprites are visible when created and we only want one smile to be shown
        // at a time, make the "dimple" smile not visible to start.
        my.sprite.dimple.visible = false;

        this.input.on('pointerdown', (pointer) => {
            this.bodyX = pointer.x;
            this.bodyY = pointer.y;

            my.sprite.body.setPosition(this.bodyX,this.bodyY);
            my.sprite.smile.setPosition(this.bodyX,this.bodyY + 20);
            my.sprite.dimple.setPosition(this.bodyX,this.bodyY + 20);
            my.sprite.leftOpenHand.setPosition(this.bodyX - 125,this.bodyY+20);
            my.sprite.rightOpenHand.setPosition(this.bodyX + 125,this.bodyY+20);
        })

    }

    update() {
    }

}