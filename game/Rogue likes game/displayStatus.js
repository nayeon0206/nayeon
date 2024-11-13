import chalk from "chalk";

// --------------------------displayStatus
function displayStatus(stage, player, monster) {
    console.log(chalk.magentaBright(`\n=== Current Status ===`));
    console.log(
      chalk.cyanBright(`| Stage: ${stage} `) +
        chalk.blueBright(`| 플레이어 체력: ${player.hp} | 공격력: |`) +
        chalk.redBright(` | 몬스터 체력: ${monster.hp} | 공격력: |`));
    console.log(chalk.magentaBright(`=====================\n`));
  }

  export default displayStatus;