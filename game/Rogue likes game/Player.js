//--------------------------플레이어

import chalk from 'chalk';

class Player {
  constructor() {
    // 플레이어의 체력, 최고공격력, 최소공격력, 공격 방어
    this.hp = 100;
    this.minAtt = 7;
    this.maxAtt = 25;
    this.defendChance = 0.3;
  }

  attack() {
    // 플레이어의 공격
    const damage = Math.floor(Math.random() * (this.maxAtt - this.minAtt + 1)) + this.minAtt;
    console.log(chalk.yellow(`플레이어가 ${damage} 데미지를 입혔습니다.`));
    return damage;
  }

  increaseRandomStat() {
    const statOptions = ['hp', 'minAtt', 'maxAtt', 'defendChans'];
    const chosenStat = statOptions[Math.floor(Math.random() * statOptions.length)];
    let rewardMessage = "";

    switch (chosenStat) {
      case 'hp':
        this.hp += 25;
        console.log(chalk.greenBright(`체력이 25 증가했습니다!`));
        break;
      case 'minAtt':
        this.minAtt += 3;
        console.log(chalk.greenBright(`최소 공격력이 3 증가했습니다!`));
        break;
      case 'maxAtt':
        this.maxAtt += 0.5;
        console.log(chalk.greenBright(`최대 공격력이 0.5 증가했습니다!`));
        break;
      case 'defendChance':
        this.defendChance += 0.05;
        console.log(chalk.greenBright(`방어 확률이 5% 증가했습니다!`));
        break;
    }
    return rewardMessage;
  }
}

export default Player;
