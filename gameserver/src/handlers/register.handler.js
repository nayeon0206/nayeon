import { addUser } from '../models/user.model.js';
import { v4 as uuidv4 } from 'uuid';

const registerHandler = (io) => {
    io.on('connection', (socket) => {
      // 최초 커넥션을 맺은 이후 발생하는 각종 이벤트를 처리하는 곳

      
    const userUUID = uuidv4(); // UUID 생성
    addUser({ uuid: userUUID, socketId: socket.id }); // 사용자 추가

    // 접속 해제시 이벤트 처리
    socket.on('disconnect', () => {});
    });
  };
  
  export default registerHandler;