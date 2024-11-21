// app.js

import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';

const app = express();
const PORT = 3000; // 서버를 열 때 사용할 포트 번호

// Express에서 req.body에 접근하여, body 데이터를 사용할 수 있도록 설정하는 미들웨어
app.use(express.json());
//일반적인 형태
// json형태로 서버에 body데이터를 전달 하면,req.body에 데이터를 변환하여 넣어준다.
app.use(express.urlencoded({ extended: true }));
// from content type에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
// 프론트엔드분들과 협업을 하게 된다면 이런 방식으로 사용해야함

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