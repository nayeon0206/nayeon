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

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get하는 로직까지

// class Car {
//     constructor(modelName, modelYear, type, price) {
//       this.modelName = modelName;
//       this.modelYear = modelYear;
//       this.type = type;
//       this.price = price;
//     }

//     // 클락션을 울리는 메서드
//     makeNoise() {
//       // console.log(this.modelName +  "빵!"");
//       console.log(`${this.modelName} 빵!`);
//     }
//     printmodelYear() {
//       console.log(`${this.modelName}은(는) ${this.modelYear}년도에 출시된 모델입니다.`)
//     }
//   }

// 자동차 만들기
//   const car1 = new Car("Avante", "2022", "가솔린", 1900);
//   const car2 = new Car("Santafe", "2024", "하이브리드", 2000);
//   const car3 = new Car("Genesis GV80", "2023", "전기차", 6000);

//   car1.makeNoise();
//   car1.printmodelYear();
//   car2.makeNoise();
//   car2.printmodelYear();
//   car3.makeNoise();
//   car3.printmodelYear();

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get하는 로직까지

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }
  //modelName을 위한 getter
  get modelName() {
    return this._modelName;
  }

  // 입력값에 대한 검증까지 가능하다.
  set modelName(value) {
    // 유효성 검사
    if (value.length <= 0) {
      console.log("[오류] 입력된 모델명이 입력되지 않았습니다. 확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }
    // if (value !== "English")
    //     console.log("[오류] 모델 이름이 영어로 입력되지 않았습니다!");
    // return;

    //검증이 완료된 경우에만 setting!
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  set modelYear(value) {
    // 연도에 대한 유효성 검증 로직 --> 구글링하면 많이 나옴.
    if (value.length !== 4) {
      console.log("[오류] 입력된 연도가 네자리가 아닙니다. 확인해주세요!");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 입력된 모델명이 문자형이 아닙니다!");
      return;
    }

    // if (value !== "English")
    //     console.log("[오류] 모델 이름이 영어로 입력되지 않았습니다!");
    // return;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입이 입력되지 않았습니다. 확인해주세요");
      return;
    } else if (typeof value !== g && value !== h && value !== e) {
      console.log("[오류] 입력된 타입이 잘못 되었습니다. 확인해주세요");
      return;
    } // g(가솔린),h(하이브리드),e(전기차) 가 아닌경우 오류

    // if (typeof value !== "English")
    //   console.log("[오류] 타입이 영어로 입력되지 않았습니다!");
    // return;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 숫자 값이 아닙니다!");
      return;
    } else if (value < "1000000") {
      console.log("[오류] 가격은 100만원보다 작을 수 없습니다. 확인해주세요");
      return;
    }

    //검증이 완료된 경우
    this._price = value;
  }

//   getCar() {
//     const a = [this._modelName, this._modelYear, this._type, this._price];
//     console.log(`제 차는${a}입니다.`);
//   }
}

const car1 = new Car("Avante", "2022", "g", 1900);
// car1.getCar();
// const car2 = new Car("Santafe", "2024", "h", 2000);
// car2.getCar();
// const car3 = new Car("Genesis GV80", "2023", "e", 6000);
// car3.getCar();

//getter 예시1 
console.log(car1.modelName);

//setter 예시1
car1.modelName = 1;
console.log(car1.modelName);