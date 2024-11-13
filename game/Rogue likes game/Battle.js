import chalk from "chalk";
import readlineSync from "readline-sync";
import displayStatus from "./displayStatus.js";
import Monster from "./Monster.js";

//-----------------------------배틀
const battle = async (stage, player, monster) => {
    let logs = [];
    // playerActionCompleted라는 조건을 적용하여 플레이어의 행동이 완료된 후 몬스터의 공격이 발생
    let playerActionCompleted = false;
  
    // 몬스터나 플레이어 둘 중 하나의 체력이 0이 될때 까지 반복해야함
    while (player.hp > 0 && monster.hp > 0) {
      console.clear();
      displayStatus(stage, player, monster);
    //   consol.log(`${monster.name}이 나타났다!`)
      logs.forEach((log) => console.log(log));
  
      console.log(
        chalk.green(
          `\n1. 공격하기 2. 연속 공격 (25%) 3. 방어하기 (30%) 4. 도망치기! 돔황챠! (50%) `),
      );
      const choice = readlineSync.question("your choice? ");
      playerActionCompleted = false;
  
      // 플레이어의 선택에 따라 다음 행동 처리 switch는 case // 실행내용 // break가 끝에 꼭 들어가야함
      switch (choice) {
        // case 1은 기본공격
        case '1': // 공격하기
          const playerDamage = player.attack();
          // -=는 빼기할당
          monster.hp -= playerDamage;
          logs.push(chalk.yellow(`${monster.name}에게 ${playerDamage} 만큼 피해를 입혔습니다! `));
          const monsterDamage = monster.attack();
              player.hp -= monsterDamage;
              logs.push(chalk.red(`플레이어가 ${monsterDamage} 만큼의 피해를 입었습니다.`));
            playerActionCompleted = true;
          break;
  
        // case 2는 연속공격을 하게끔하기
        case '2': //연속 공격 (25% 확률)
          if (Math.random() < 0.25) { // 0.25 이하일 때 연속 공격 성공
            const continuousDamage = player.attack() + player.attack();
            monster.hp -= continuousDamage;
            logs.push(chalk.yellow(`연속 공격 성공! ${monster.name}에게 ${continuousDamage} 데미지를 입혔습니다!`));
            playerActionCompleted = true;
          } else { // 연속 공격 실패 시 몬스터의 반격
            logs.push(chalk.red(`연속 공격 실패... ${monster.name}의 반격을 받았습니다!`));
            const monsterDamage = monster.attack();
            player.hp -= monsterDamage;
            logs.push(chalk.red(`${monster.name}에게 ${monsterDamage} 데미지를 입었습니다.`));
            playerActionCompleted = true;
          }
        break;
  
        case '3': // 방어하기 (30퍼센트 확률)
          if (Math.random() < 0.3) {
            logs.push(chalk.yellow(`공격 방어에 성공했습니다!`));
            playerActionCompleted = true;
          } else {const monsterDamage = monster.attack();
            player.hp -= monsterDamage;
            logs.push(chalk.red(`방어실패..! ${monster.name}에게 ${monsterDamage} 데미지를 입었습니다....`));
          }
          playerActionCompleted = true;
          break;
  
        case '4': // 도망치기 돔황챠! (50% 확률)
        if (Math.random() < 0.5) {
          console.log(chalk.yellow(`${monster.name}에게서 무사히 도망쳤습니다!`));
          return; // 배틀에서 탈출
        } else {
          const monsterDamage = monster.attack();
          player.hp -= monsterDamage;
          logs.push(chalk.red(`도망 실패... ${monster.name}의 공격을 받았습니다: ${monsterDamage} 데미지`));
        }
        playerActionCompleted = true;
        break;
  
        default:
          console.log(chalk.red("잘못된 선택입니다. 다시 선택해주세요."));
          continue;
      };
  
      
      logs.push(chalk.green(`${choice}를 선택했습니다.`));
    }
  };

  export default battle