import Player from "./Player.js";
import Monster from "./Monster.js";
import battle from "./Battle.js";
import chalk from "chalk";
import readlineSync from "readline-sync";


export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    const battleResult = await battle(stage, player, monster);

    if (battleResult) { // 전투 승리 시 (도망친 경우는 false)
      console.log(chalk.blueBright(`\n${stage} 스테이지 클리어!!`));
      
      const rewardMessage = player.increaseRandomStat();
      console.log(chalk.green(`\n스테이지 클리어 보상: ${rewardMessage}`));

      readlineSync.question(chalk.cyan(`\nPress Enter to move to next...`));
      console.clear();
      stage++;
    } else { // 도망친 경우
      console.log(chalk.yellow(`새로운 몬스터가 나타납니다!`));
      readlineSync.question(chalk.cyan(`\nPress Enter to move to next...`));
      console.clear();
      stage++;
    }
  }
  //   const monster = new Monster(stage);
  //   await battle(stage, player, monster);

  //   // 스테이지 클리어 및 게임 종료 조건
  //   if (player.hp > 0) {
  //     console.log(
  //       chalk.blueBright(`\n${stage} 스테이지 클리어!!`));
        
  //       //스테이지 클리어 시 능력치 중 하나 무작위로 증가
  //       const rewardMessage = player.increaseRandomStat();
  //     console.log(chalk.magentaBright(`\n${rewardMessage}`));

  //     //엔터 입력 후 다음 스테이지로 이동하기
  //     readlineSync.question(chalk.cyan(`\nPress Enter to move to next...`));
  //     console.clear();
  //     stage++;
  //   }
  // }

  if (player.hp > 0) {
    console.log(
      chalk.greenBright(`축하합니다 ~! 모든 스테이지를 클리어 했습니다!!`));
  }else {
    console.log(chalk.redBright(`플레이어가 사망했습니다..게임이 종료되었습니다.`));
    const restartChoice = readlineSync.question("New game start? (y / n): ")
    if(restartChoice.toLowerCase() === "y") {
      startGame();
    }
  }
}
