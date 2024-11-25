
import express from 'express';
import mysql from 'mysql2';

const connect = mysql.createConnection({
  host: 'express-database.cnkqmoqs2zk1.ap-northeast-2.rds.amazonaws.com', // AWS RDS 엔드포인트
  user: 'nayeon', // AWS RDS 계정 명
  password: 'slek970206!', // AWS RDS 비밀번호
  database: 'express_db', // 연결할 MySQL DB 이름
})
const app = express();
const PORT = 3017;

app.use(express.json());

/** 테이블 생성 API **/
app.post('/api/tables/', async (req, res, next) => {
    const { tableName } = req.body;
  
    await connect.promise().query(`
        CREATE TABLE ${tableName}
        (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name varchar(255) NOT NULL,
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`);
  
    return res.status(201).json({ message: '테이블 생성에 성공하였습니다.' });
  });
  
/** 테이블 조회 API **/
app.get('/api/tables', async (req, res, next) => {
    // const queryResult = await connect.promise().query(
    //     `SHOW TABLES`
    // )
    const [tableList] = await connect.promise().query(`SHOW TABLES`);
    const tableName = tableList.map(table => Object.values(table)[0]);
  
    return res.status(200).json({ tableList: tableName });
    // return res.status(200).json({ message: tableList})
  });

/** 데이터 삽입 API **/
app.post('/api/tables/:tableName/items', async (req, res, next) => {
    // 테이블 이름, name 컬럼에 할당될 값
    const { tableName } = req.params;
    const { name } = req.body;
  
    await connect.promise().query(`
        INSERT INTO ${tableName} (name)
        VALUES ('${name}')`);
    return res.status(201).json({ message: '데이터 생성에 성공하였습니다.' });
  });

/** 데이터 조회 API **/
app.get('/api/tables/:tableName/items', async (req, res, next) => {
    const { tableName } = req.params;
  
    const [itemList] = await connect.promise().query(`
        SELECT id, name, createdAt
        FROM ${tableName}`);
  
    return res.status(200).json({ itemList: itemList });
  });
  

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
