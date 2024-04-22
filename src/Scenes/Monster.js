class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;

        this.leftarmX = 300;
        this.leftarmY = 370;
        this.rightarmY = 370;
        this.rightarmX = 500;

        this.lefteyeX = 365;
        this.lefteyeY = 300;
        this.righteyeY = 300;
        this.righteyeX = 435;

        this.leftlegX = 360;
        this.leftlegY = 500;
        this.rightlegX = 440;
        this.rightlegY = 500;

        this.mouthX = 400;
        this.mouthY = 350;
        this.fangsX = 400;
        this.fangsY = 350;

        this.rightheadaccX = 435;
        this.rightheadaccY = 270;
        this.leftheadaccX = 365;
        this.leftheadaccY = 270;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // Body
        //this.load.image("greenBody", "body_blueA.png")
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueA.png");
        my.sprite.leftarm = this.add.sprite(this.leftarmX, this.leftarmY, "monsterParts", "arm_greenA.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.rightarm = this.add.sprite(this.rightarmX, this.rightarmY, "monsterParts", "arm_greenA.png");

        my.sprite.lefteye = this.add.sprite(this.lefteyeX, this.lefteyeY, "monsterParts", "eye_closed_happy.png");
        my.sprite.righteye = this.add.sprite(this.righteyeX, this.righteyeY, "monsterParts", "eye_closed_happy.png");

        my.sprite.leftleg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_greenA.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.rightleg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_greenA.png");
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");

        my.sprite.leftheadacc = this.add.sprite(this.leftheadaccX, this.leftheadaccY, "monsterParts", "detail_dark_horn_small.png");
        my.sprite.leftheadacc.flipX = true;
        my.sprite.rightheadacc = this.add.sprite(this.rightheadaccX, this.rightheadaccY, "monsterParts", "detail_dark_horn_small.png");

        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
 
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        //for regular smile
        let S = (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S));
        if (Phaser.Input.Keyboard.JustDown(S)) {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        }

        //for fangs
        let F = (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F));
        if (Phaser.Input.Keyboard.JustDown(F)) {
            my.sprite.fangs.visible = true;
            my.sprite.mouth.visible = false;
        }

        let A = (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A));
        if (A.isDown) {
            my.sprite.body.x -= 5;
            my.sprite.leftarm.x -= 5;
            my.sprite.rightarm.x -= 5;
            my.sprite.lefteye.x -= 5;
            my.sprite.righteye.x -= 5;
            my.sprite.leftleg.x -= 5;
            my.sprite.rightleg.x -= 5;
            my.sprite.mouth.x -= 5;
            my.sprite.fangs.x -= 5;
            my.sprite.rightheadacc.x -= 5;
            my.sprite.leftheadacc.x -= 5;
            
        } else if (Phaser.Input.Keyboard.JustUp(A)) {
            return;
        }

        let D = (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D));
        if (D.isDown) {
            my.sprite.body.x += 5;
            my.sprite.leftarm.x += 5;
            my.sprite.rightarm.x += 5;
            my.sprite.lefteye.x += 5;
            my.sprite.righteye.x += 5;
            my.sprite.leftleg.x += 5;
            my.sprite.rightleg.x += 5;
            my.sprite.mouth.x += 5;
            my.sprite.fangs.x += 5;
            my.sprite.rightheadacc.x += 5;
            my.sprite.leftheadacc.x += 5;
            
        } else if (Phaser.Input.Keyboard.JustUp(D)) {
            return;
        }

       
    }

}