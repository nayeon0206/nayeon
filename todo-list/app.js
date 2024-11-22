import express from 'express';

const app = express();
const PORT = 3000;

// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./assets"));


const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hi!' });
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});