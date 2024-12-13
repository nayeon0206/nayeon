import { getUsers, removeUser } from '../models/user.model.js';

export const handleDisconnect = (socket, uuid) => {
  removeUser(socket.id); // 사용자 삭제
  console.log(`User disconnected: ${socket.id}`);
  console.log('Current users:', getUsers());
}; 

export const handleConnection = (socket, uuid) => {
    console.log(`New user connected: ${uuid} with socket ID ${socket.id}`);
    console.log('Current users:', getUsers());
  
    // 서버 메모리에 있는 게임 에셋에서 stage 정보를 가지고 온다.
    const { stages } = getGameAssets();
    // stages 배열에서 0번째 = 첫번째스테이지 의 ID를 해당 유저의 stage에 저장한다.
    setStage(uuid, stages.data[0].id);
    // 로그를 찍어 확인.
    console.log('Stage:', getStage(uuid));
  
    // emit 메서드로 해당 유저에게 메시지를 전달할 수 있다.
    // 현재의 경우 접속하고 나서 생성된 uuid를 바로 전달해주고 있다.
    socket.emit('connection', { uuid });
  };

  export const handleEvent = (io, socket, data) => {
    if (!CLIENT_VERSION.includes(data.clientVersion)) {
      socket.emit('response', { status: 'fail', message: 'Client version mismatch' });
      return;
    }
  
    const handler = handlerMappings[data.handlerId];
    if (!handler) {
      socket.emit('response', { status: 'fail', message: 'Handler not found' });
      return;
    }
  
    // 적절한 핸들러에 userID 와 payload를 전달하고 결과를 받습니다.
    const response = handler(data.userId, data.payload);
    // 만약 결과에 broadcast (모든 유저에게 전달)이 있다면 broadcast 합니다.
    if (response.broadcast) {
      io.emit('response', 'broadcast');
      return;
    }
    // 해당 유저에게 적절한 response를 전달합니다.
    socket.emit('response', response);
  };