import { addUser } from '../models/user.model.js';
import { v4 as uuidv4 } from 'uuid';
import { handleConnection, handleDisconnect } from './helper.js';

// io는 소켓이다. on은 함수 = 연결하다.
// parameter (매개변수)
const registerHandler = (io) => {
    io.on('connection', (socket) => {
      // 최초 커넥션을 맺은 이후 발생하는 각종 이벤트를 처리하는 곳

      
    const userUUID = uuidv4(); // UUID 생성
    addUser({ uuid: userUUID, socketId: socket.id }); // 사용자 추가

    // 접속시 유저 정보 생성 이벤트 처리
    handleConnection(socket, userUUID);

    // 모든 서비스 이벤트 처리
    socket.on('event', (data) => handleEvent(io, socket, data));
    // 접속 해제시 이벤트 처리
    socket.on('disconnect', () => handleDisconnect(socket, userUUID));
    });
  };
  
  export default registerHandler;

  // on 뒤에 오는 것?
  // 첫번째 문자 : 역할
  // 두번째 함수 : 행동
  // 왜 이렇게 하나..? =>
  // 같은 프로그램이 아니면 함수 호출을 할 수가없음
  // 메모리를 공유한다.
  // connection이라는 문자열이 실행되면 실행시켜라 는 의미