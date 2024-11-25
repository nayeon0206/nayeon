
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router(); // express.Router()를 이용해 라우터를 생성합니다.
const prisma = new PrismaClient({
  // Prisma를 이용해 데이터베이스를 접근할 때, SQL을 출력해줍니다.
  log: ['query', 'info', 'warn', 'error'],

  // 에러 메시지를 평문이 아닌, 개발자가 읽기 쉬운 형태로 출력해줍니다.
  errorFormat: 'pretty',
}); // PrismaClient 인스턴스를 생성합니다.


// 💡 **게시글 생성 API**의 비즈니스 로직

// 1. `title`, `content`, `password`를 **body**로 전달받는다.
// 2. `title`, `content`, `password`를 이용해 **Posts** 테이블에 데이터를 삽입 한다.
// 3. 생성된 게시글을 반환한다.


// 게시글 생성
router.post('/posts', async (req, res, next) => {
  const { title, content, password } = req.body;
  const post = await prisma.posts.create({
    data: {
      title: title,
      content: content,
      password: password,
    },
  });

  return res.status(201).json({ data: post });
});


export default router;
