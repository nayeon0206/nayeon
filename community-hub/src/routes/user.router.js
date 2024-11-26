// src/routes/users.router.js

import express from 'express';
import { prisma } from '../utiles/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Prisma } from '@prisma/client';

const router = express.Router();

/** 사용자 회원가입 API 트랜잭션 **/
router.post('/sign-up', async (req, res, next) => {
  try {
	  const { email, password, name, age, gender, profileImage } = req.body;
	  const isExistUser = await prisma.users.findFirst({
	    where: {
	      email,
	    },
	  });
	
	  if (isExistUser) {
	    return res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
	  }
	
	  // 사용자 비밀번호를 암호화합니다.
	  const hashedPassword = await bcrypt.hash(password, 10);


    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행합니다.
    const [user, userInfo] = await prisma.$transaction(
      async (tx) => {
        // 트랜잭션 내부에서 사용자를 생성합니다.
        const user = await tx.users.create({
          data: {
            email,
            password: hashedPassword, // 암호화된 비밀번호를 저장합니다.
          },
        });

        // throw new Error("고의로 발생시킨 트랜젝션 에러")

        // 트랜잭션 내부에서 사용자 정보를 생성합니다.
        const userInfo = await tx.userInfos.create({
          data: {
            userId: user.userId, // 생성한 유저의 userId를 바탕으로 사용자 정보를 생성합니다.
            name,
            age,
            gender: gender.toUpperCase(), // 성별을 대문자로 변환합니다.
            profileImage,
          },
        });

        // 콜백 함수의 리턴값으로 사용자와 사용자 정보를 반환합니다.
        return [user, userInfo];
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      },
    );
    return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
		next(err);
  }
});


//   1. `email`, `password`를 **body**로 전달받습니다.
// 2. 전달 받은 `email`에 해당하는 사용자가 있는지 확인합니다.
// 3. 전달 받은 `password`와 데이터베이스의 저장된 `password`를 bcrypt를 이용해 검증합니다.
// 4. 로그인에 성공한다면, 사용자에게 JWT를 발급합니다.


/** 로그인 API **/
router.post('/sign-in', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await prisma.users.findFirst({ where: { email } });

  if (!user)
    return res.status(401).json({ message: '존재하지 않는 이메일입니다.' });
  // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

  // 로그인에 성공하면, 사용자의 userId를 바탕으로 토큰을 생성합니다.
  const token = jwt.sign(
    {
      userId: user.userId,
    },
    'custom-secret-key',
  );

  // authotization 쿠키에 Berer 토큰 형식으로 JWT를 저장합니다.
  res.cookie('authorization', `Bearer ${token}`);
  return res.status(200).json({ message: '로그인에 성공하였습니다.' });
});



// 3. 조회한 사용자의 상세한 정보를 클라이언트에게 반환합니다.

/** 사용자 조회 API **/
router.get('/users', authMiddleware, async (req, res, next) => {
    const { userId } = req.user;
// 1. 클라이언트가 **로그인된 사용자인지 검증**합니다.
    const user = await prisma.users.findFirst({
      where: { userId: +userId },
      select: {
        userId: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        userInfos: {
// 2. 사용자를 조회할 때, 1:1 관계를 맺고 있는 **Users**와 **UserInfos** 테이블을 조회합니다.
          select: {
            name: true,
            age: true,
            gender: true,
            profileImage: true,
          },
        },
      },
    });
  
    return res.status(200).json({ data: user });
  });

export default router;