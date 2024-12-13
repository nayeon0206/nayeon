const users = [];

// 서버 메모리에 유저의 세션(소켓ID)을 저장
// 이때 유저는 객체 형태로 저장
// { uuid: string; socketId: string; };
export const addUser = (user) => {
  users.push(user);
};

export const removeUser = (socketId) => {
    const index = users.findIndex((user) => user.socketId === socketId);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  };

// 전체 유저 조회
export const getUsers = () => {
  return users;
};