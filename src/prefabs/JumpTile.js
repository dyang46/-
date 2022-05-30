class JumpTile extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y, texture, direction) {
        super(scene, x, y, texture, 0);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setOrigin(0, 1);
        this.setAlpha(0);
        this.setImmovable(true);
        this.direction = direction;
        this.distance = 7 * 32;
    }

    create(){
        
    }
    returnDirection(){
        return this.direction;
    }
    jump(player) {
        this.newX = this.x;
        this.newY = this.y;

        if (this.direction == "left") {
            this.newX -= this.distance;
        } else if (this.direction == "right") {
            this.newX += this.distance;
        } else if (this.direction == "up") {
            this.newY -= this.distance;
        } else if (this.direction == "down") {
            this.newY += this.distance;
        }

        player.setPosition(this.newX, this.newY);
        player.setAlpha(1);
        player.setVelocity(0);
    }
}