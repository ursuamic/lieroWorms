import Enemy from './enemy';

export default class Enemies extends Phaser.GameObjects.Group {
  constructor(scene, enemies) {
    super(scene)
    this.scene = scene;

    let enemyGroup = [];

    enemies.forEach(enemy => {
         enemyGroup.push(new Enemy(scene, enemy.x, enemy.y, enemy.texture))
     });

     console.log(enemyGroup);

    this.addMultiple(enemyGroup);
  }

  update() {

   // this.children.iterate((enemy) => {
   //
   //   }, null)
  }
}
