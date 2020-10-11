export default class Enemy extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setVelocityX(-120); //testVelocity
  }

  update() {

  }
}
