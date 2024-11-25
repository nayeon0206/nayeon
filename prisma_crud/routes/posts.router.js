
import express from 'express';
import { prisma } from '../utils/prisma/index.js';

const router = express.Router(); // express.Router()를 이용해 라우터를 생성합니다.



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


/** 게시글 목록 조회 API **/
router.get('/posts', async (req, res, next) => {
  const posts = await prisma.posts.findMany({
    select: {
      postId: true,
      title: true,
      createdAt: true,
      updatedAt: true,
    // content: false,
    // password: false // false로 지정하면 에러 발생
},
  });

  return res.status(200).json({ data: posts });
});

/** 게시글 상세 조회 API **/
router.get('/posts/:postId', async (req, res, next) => {
  const { postId } = req.params;
  const post = await prisma.posts.findFirst({
    where: { postId: +postId }, //parseInt(postId)해줘도된다.
    select: {
      postId: true,
      title: true,
      content: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  return res.status(200).json({ data: post });
});


// 💡 **게시글 수정 API**의 비즈니스 로직
// 1. **Path Parameters**로 어떤 게시글을 수정할 지 `postId`를 전달받습니다.
// 2. 변경할 `title`, `content`와 권한 검증을 위한 `password`를 **body**로 전달받습니다.
// 3. `postId`를 기준으로 게시글을 검색하고, 게시글이 존재하는지 확인합니다.
// 4. 게시글이 조회되었다면 해당하는 게시글의 `password`가 일치하는지 확인합니다.
// 5. 모든 조건을 통과하였다면 **게시글을 수정**합니다. */}

/** 게시글 수정 API **/
router.put('/posts/:postId', async (req, res, next) => {
  const { postId } = req.params;
  const { title, content, password } = req.body;

  const post = await prisma.posts.findUnique({
    where: { postId: +postId },
  });

  if (!post)
    return res.status(404).json({ message: '게시글이 존재하지 않습니다.' });
  else if (post.password !== password)
    return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

  await prisma.posts.update({
    data: {
        title: title,
        content: content, },
    where: {
      postId: +postId,
      password: password,
    },
  });

  return res.status(200).json({ data: '게시글이 수정되었습니다.' });
});


/** 게시글 삭제 API **/
router.delete('/posts/:postId', async (req, res, next) => {
  const { postId } = req.params;
  const { password } = req.body;

  const post = await prisma.posts.findFirst({ where: { postId: +postId } });

  if (!post)
    return res.status(404).json({ message: '게시글이 존재하지 않습니다.' });
  else if (post.password !== password)
    return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

  await prisma.posts.delete({ where: { postId: +postId } });

  return res.status(200).json({ data: '게시글이 삭제되었습니다.' });
});


export default router;
