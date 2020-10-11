export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, ship) {
    super(scene, ship.x, ship.y, 'ship')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.scene = scene; //not used atm
    this.angle = 0;
    this.disableBody(true, true);
    const bullet = this;

    scene.input.on('pointermove', function (pointer) {
        bullet.angle = Phaser.Math.Angle.BetweenPoints(ship, pointer);
    }, scene); //funkar ej på touch

    scene.input.on('pointerup', function () {
        bullet.enableBody(true, ship.x, ship.y, true, true);
        scene.physics.velocityFromRotation(bullet.angle, 600, bullet.body.velocity);
    }, scene);
  }
}
