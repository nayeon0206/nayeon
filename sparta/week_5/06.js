// 상속 (Inherittance)
// Class -> 유산으로 내려주는 주요 기능
// 부모 <-> 자식

//동물 전체에 대한 클래스
class Animal {
    //생성자
    constructor(name) {
        this.name = name;
    }

    // 메서드(짖다)
    speak() {
        console.log(`${this.name} says!`);
    }
}
//부모class에서 자식 class로 상속받을때 extends를 꼭 써주자.
//constructor는 써줄 필요가 없음. 상속이 되었기 때문에
class Dog extends Animal {
    // 부모에게서 내려받은 메서드를 재정의할 수 있음
    // oberriding... << 부모로부터 내려받아서 새로운 메서드 정의 하는 것
    speak () {
        console.log(`${this.name} barks!`);
    }
}

const cuttyPuppy01 = new Dog('찬이');
cuttyPuppy01.speak();