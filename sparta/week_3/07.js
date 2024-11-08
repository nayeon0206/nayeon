// 런타임 
// run + time
// 코드가 돌아가는 환경
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this는 노드(global 객체), 브라우저(window 객체)

var obj1 = {
	outer: function() {
		console.log("TEST =>", this); // (1)
		var innerFunc = function() {
			console.log("TEST =>", this); // (2), (3)
		}
		innerFunc();

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod();
	}
};
obj1.outer();