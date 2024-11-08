//위 패턴을 우리 예제에 적용해봅시다.
var user = {
	name: 'wonjang',
	gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'twojang';

if (user !== user2) {
	console.log('유저 정보가 변경되었습니다.');
}

console.log(user.name, user2.name);
console.log(user === user2);