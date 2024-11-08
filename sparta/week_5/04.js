// Getters 와 Setters
// 간편하고 안전하게 값을 가져올 수 있다.
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체 (인스턴스)
// 프로퍼티(constructor)
// new Class(a, b, c)
// Setter // 외부로부터 값이 들어왔을 때 내부에서 값을 검증하고 쓸 수 있다.

class Rectangle {
  constructor(height, width) {
    // underscore(_) : private(은밀하고, 감춰야 할 때)
    this._height = height;
    this._width = width;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      console.log("[오류] 가로길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "Number") {
      console.log("[오류] 가로 길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this.width = value;
  }

  // height를 위한 getter
  get height() {
    return this._height;
  }

  // height를 위한 setter
  set height(value) {
    // 검증 1 : value가 음수이면 오류!
    if (value <= 0) {
      console.log("[오류] 세로길이는 0보다 커야 합니다.");
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이
  getArea () {
    const a = this._width * this._height;
    console.log (`넓이는 => ${a}입니다.`);
  }
}

// instance 생성
const rect1 = new Rectangle(10, 7);
rect1.getArea();
// const rect2 = new Rectangle(10, 30);
// const rect3 = new Rectangle(15, 20);
