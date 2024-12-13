import { Server as SocketIO} from "socket.io";
import registerHandler from '../handlers/register.handler.js';


// as를 써주는 이유?
// server가 많으니 socketIO server라는 이름을 붙인다는 의미
const initSocket = (server) => {
    const io = new SocketIO();
    io.attach(server);
      // 여기서 호출
      // 클라이언트로부터 오는 이벤트를 처리할 핸들러를 서버에 등록
    registerHandler(io);
  };
  
  export default initSocket;