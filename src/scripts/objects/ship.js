export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'ship')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.scene = scene;

    this.setDamping(true);
    this.setDrag(0.99);
    this.setMaxVelocity(200);
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.up.isDown)
    {
        this.scene.physics.velocityFromRotation(this.rotation, 200, this.body.acceleration);
    }
    else
    {
        this.setAcceleration(0);
    }

    if (this.cursors.left.isDown)
    {
        this.setAngularVelocity(-300);
    }
    else if (this.cursors.right.isDown)
    {
        this.setAngularVelocity(300);
    }
    else
    {
        this.setAngularVelocity(0);
    }


    this.scene.physics.world.wrap(this, 32);
  }
}
