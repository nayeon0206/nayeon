import Player from "./Player.js";
import Monster from "./Monster.js";
import battle from "./battle.js";
import chalk from "chalk";
import readlineSync from "readline-sync";


export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10 && player.hp > 0) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건
    if (player.hp > 0) {
      console.log(
        chalk.blueBright(` ${stage} 스테이지 클리어! 다음 스테이지로 !`));
      // player.gamerewords();
      stage++;
    }
  }

  if (player.hp > 0) {
    console.log(
      chalk.greenBright(`축하합니다 ~! 모든 스테이지를 클리어 했습니다!!`),
    );
  }
}