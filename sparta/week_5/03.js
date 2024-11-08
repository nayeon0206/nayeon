// 클래스 연습해보기

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
// 다음 네 개의 값이 필수로 입력 돼야 합니다.
// (1) modelName
// (2) modelYear
// (3) type : 가솔린, 전기차, 디젤
// (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

// (1). 클래스 생성하기
class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  // 클락션을 울리는 메서드
  makeNoise() {
    // console.log(this.modelName +  "빵!"");
    console.log(`${this.modelName} 빵!`);
  }
  printmodelYear() {
    console.log(`${this.modelName}은(는) ${this.modelYear}년도에 출시된 모델입니다.`)
  }
}

// 자동차 만들기
const car1 = new Car("Avante", "2022", "가솔린", 1900);
const car2 = new Car("Santafe", "2024", "하이브리드", 2000);
const car3 = new Car("Genesis GV80", "2023", "전기차", 6000);

car1.makeNoise();
car1.printmodelYear();
car2.makeNoise();
car2.printmodelYear();
car3.makeNoise();
car3.printmodelYear();
