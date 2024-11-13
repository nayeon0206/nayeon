//--------------------------몬스터
import chalk from "chalk";

class Monster {
    constructor(stage) {
      this.hp = 50 + stage * 10;
      this.minAtt = 5 + stage
      
    }
  
    attack() {
      // 몬스터의 공격
      const damage = Math.floor(Math.random() * 15) + 5;
      console.log(chalk.red(`몬스터가 ${damage} 데미지를 입혔습니다.`));
      return damage;
    }
  }


  export default Monster;