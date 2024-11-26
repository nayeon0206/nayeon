// app.js

import express from 'express';
import cookieParser from 'cookie-parser';
import UsersRouter from './routes/user.router.js';
import PostsRouter from './routes/post.router.js';
import CommentsRouter from './routes/comments.router.js'
import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';

const app = express();
const PORT = 3018;

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use('/api', [UsersRouter, PostsRouter, CommentsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});


