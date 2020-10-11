import PhaserLogo from '../objects/phaserLogo';
import FpsText from '../objects/fpsText';
import Ship from '../objects/ship';
import Bullet from '../objects/bullet';
import Enemies from '../objects/enemies';

export default class MainScene extends Phaser.Scene {
  fpsText
  ship
  enemiesGroup

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {

    this.enemies = [{x:200, y: 200, texture: 'ship'}, {x:200, y: 400, texture: 'ship'}];

    this.enemiesGroup = new Enemies(this, this.enemies);
    this.ship = new Ship(this, this.cameras.main.width / 2, 300);
    this.bullet = new Bullet(this, this.ship)
    //new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this);


    /**
     * Delete all the code below to start a fresh scene
     */

    // async/await example
    const pause = ms => {
      return new Promise(resolve => {
        window.setTimeout(() => {
          resolve()
        }, ms)
      })
    }
    const asyncFunction = async () => {
      console.log('Before Pause')
      await pause(4000) // 4 seconds pause
      console.log('After Pause')
    }
    asyncFunction()

    // Spread operator test
    const numbers = [0, 1, 2, 3]
    const moreNumbers = [...numbers, 4, 5]
    console.log(`All numbers: ` + moreNumbers)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: 24
      })
      .setOrigin(1, 0)
  }

  update() {
    this.fpsText.update();
    this.ship.update();
    this.enemiesGroup.update();
    this.physics.world.wrap(this.enemiesGroup, 32);
  }
}
