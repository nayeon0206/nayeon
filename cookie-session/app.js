// app.js

import express from 'express';

const app = express();
const PORT = 5001;

app.use(express.json());

// 'res.cookie()'를 이용하여 쿠키를 할당하는 API
app.get("/set-cookie", (req, res) => {
    let expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.
  
    res.cookie('name', 'sparta', {
      expires: expires
    });
    return res.end();
  });

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});