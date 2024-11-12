import chalk from "chalk";
import readlineSync from "readline-sync";

class Player {
  constructor() {
    this.hp = 50;
  }

  attack() {
    // 플레이어의 공격
    //
    const damage = Math.floor(Math.random() * 10) + 5;
    console.log(chalk.blue(`플레이어가 ${damage} 데미지를 입혔습니다.`));
    return damage;
  }
}

class Monster {
  constructor() {
    this.hp = 20;
  }

  attack() {
    // 몬스터의 공격
    const damage = Math.floor(Math.random() * 5) + 5;
    console.log(chalk.red(`몬스터가 ${damage} 데미지를 입혔습니다.`));
    return damage;
  }
}

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(
    chalk.cyanBright(`| Stage: ${stage} `) +
      chalk.blueBright(`| Player HP: ${player.hp}`) +
      chalk.redBright(`| Monster HP: ${monster.hp} |`),
  );
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];
  // 몬스터나 플레이어 둘 중 하나의 체력이 0이 될때 까지 반복해야함
  while (player.hp > 0 && monster.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);
    // consol.log(`${monsterName}이 나타났다!`)
    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격하기 2. 연속 공격 (30%) 3. 방어하기 (40%) 4. 도망치기 (55%) `,
      ),
    );
    const choice = readlineSync.question("your choice? ");
    // 플레이어의 선택에 따라 다음 행동 처리 switch는 case // 실행내용 // break가 끝에 꼭 들어가야함
    switch (choice) {
      case "1": // 공격하기
        const playerDamage = player.attack();
        // -=는 빼기할당
        monster.hp -= playerDamage;
        logs.push(
          chalk.yellow(`몬스터에게 ${playerDamage} 만큼 피해를 입혔습니다! `),
        );
        break;

      case "2": //연속 공격 (30% 확률)
        // 연속 공격 놔두고 진행하기 일단.
        break;

      case "3": // 방어하기 (40퍼센트 확률)
        let Defend = [];
        if (Defend <= 40) {
          logs.push(chalk.yellow(`공격 방어에 성공했습니다!`));
        } else {
          const att1 = monster.attack();
          player.hp -= att1;
          logs.push(chalk.red(`안타깝게도 방어하지 못했습니다...`));
          return;
        }
        break;

      case "4": // 도망치기 돔황챠! (55% 확률)
        console.log(chalk.yellow(`몬스터에게서 무사히 도망쳤습니다!`));
        return;

      default:
        break;
    }
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }
};

export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건
    if (player.hp > 0) {
      console.log(
        chalk.blueBright(` ${stage} 스테이지 클리어! 다음 스테이지로 !`),
      );
      stage++;
    }
  }

  if (player.hp > 0) {
    console.log(
      chalk.greenBright(`축하합니다 ~! 모든 스테이지를 클리어 했습니다!!`),
    );
  }
}
