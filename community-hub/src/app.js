// app.js

import express from 'express';
import cookieParser from 'cookie-parser';
import UsersRouter from './routes/user.router.js';
import PostsRouter from './routes/post.router.js';
import CommentsRouter from './routes/comments.router.js'
import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import expressSession from 'express-session';
import expressMySQLSession from 'express-mysql-session';

const app = express();
const PORT = 3018;

// MySQLStore를 Express-Session을 이용해 생성합니다.
const MySQLStore = expressMySQLSession(expressSession);
// MySQLStore를 이용해 세션 외부 스토리지를 선언합니다.
const sessionStore = new MySQLStore({
  user: 'nayeon',
  password: 'slek970206!',
  host: 'express-database.cnkqmoqs2zk1.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  database: 'community_hub',
  expiration: 1000 * 60 * 60 * 24, // 세션의 만료 기간을 1일로 설정합니다.
  createDatabaseTable: true, // 세션 테이블을 자동으로 생성합니다.
});

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: 'customized_secret_key', // 세션을 암호화하는 비밀 키를 설정
    resave: false, // 클라이언트의 요청이 올 때마다 세션을 새롭게 저장할 지 설정, 변경사항이 없어도 다시 저장
    saveUninitialized: false, // 세션이 초기화되지 않았을 때 세션을 저장할 지 설정
    cookie: {
      // 세션 쿠키 설정
      maxAge: 1000 * 60 * 60 * 24, // 쿠키의 만료 기간을 1일로 설정합니다.
    },

    
  }),
);

app.use('/api', [UsersRouter, PostsRouter, CommentsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
