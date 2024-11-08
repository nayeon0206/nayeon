// 클래스라는 설계도!
class Person {
    // 우리는 사람이기때문에 필수요소
    // 요소 : name, age
    //constructor는 생성자 함수
    constructor (name, age) {
        this.name = name; //this에name(우리가 만들 실체) = 외부로부터 받아온 것
        this.age = age;
    }

    //메서드 형태의 동사 표현
    sayHello() {
        // console.log(this.name + " 님 안녕하세요!");
        // console.log(`${this.name} 님 안녕하세요!`);
    }

    // 내 나이는 ~살 이예요 라고 출력하는 메서드 만들기
    myAge() {
        console.log(`${this.name} 나이는 ${this.age}살 이예요`);
    }
}

// 설계도를 통해 인스턴스(실제 사물) 만들기!
const person1 = new Person("홍길동", "30");
// 이름은 홍길동, 나이는 30살인 사람 하나를 만들어줘(설계도에 근거해서)
const person2 = new Person("홍길순", "25");

person1.myAge();
person2.myAge();

// person1.sayHello();
// person2.sayHello();