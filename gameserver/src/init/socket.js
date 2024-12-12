import { Server as SocketIO} from "socket.io";
// as를 써주는 이유?
// server가 많으니 socketIO server라는 이름을 붙인다는 의미
const initSocket = (server) => {
    const io = new SocketIO();
    io.attach(server);
};

export default initSocket;