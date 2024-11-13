//--------------------------몬스터
import chalk from "chalk";

class Monster {
    constructor() {
      this.hp = 50;
      
    }
  
    attack() {
      // 몬스터의 공격
      const damage = Math.floor(Math.random() * 15) + 5;
      console.log(chalk.red(`몬스터가 ${damage} 데미지를 입혔습니다.`));
      return damage;
    }
  }
  
  // --------------------------displayStatus
  function displayStatus(stage, player, monster) {
    console.log(chalk.magentaBright(`\n=== Current Status ===`));
    console.log(
      chalk.cyanBright(`| Stage: ${stage} `) +
        chalk.blueBright(`| 플레이어 체력: ${player.hp} |`,`| 공격력: |`) +
        chalk.redBright(`| 몬스터 체력: ${monster.hp} |`,`| 공격력: |`),
    );
    console.log(chalk.magentaBright(`=====================\n`));
  }

  export default Monster;