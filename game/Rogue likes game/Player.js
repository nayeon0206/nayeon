//--------------------------플레이어

import chalk from "chalk";

class Player {
    constructor() {
      // 플레이어의 체력, 최고공격력, 최소공격력
      this.hp = 100;
      this.minAtt = 5;
      this.maxAtt = 25;
    }
  
    attack() {
      // 플레이어의 공격
      const damage = Math.floor(Math.random() * (this.maxAtt - this.minAtt + 1)) + this.minAtt;
      console.log(chalk.blue(`플레이어가 ${damage} 데미지를 입혔습니다.`));
      return damage;
    }
  
  }

  
export default Player;