// app.js

import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';

const app = express();
const PORT = 3000; // 서버를 열 때 사용할 포트 번호

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:3000/api -> goodsRouter
// localhost:3000/api -> newsRouter
// 2. 라우터를 등록 합니다.
app.use('/api', [goodsRouter, newsRouter]);
// 1. Express.js의 서버를 엽니다.
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});