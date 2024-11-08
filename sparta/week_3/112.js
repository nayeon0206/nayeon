var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
						// 1. 객체 this 바인딩 : 프란시스 은가누
            return this.fullname;
        }
    },

    getName: function() {
				// 2. 객체 this 바인딩 : 존 존스
        return this.fullname;
    },

    getFirstName: () => {
				// 3. 함수 this 바인딩 : 시릴
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
				// 4. 함수 this 바인딩 : 가네
        return this.fullname.split(' ')[1];
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);
