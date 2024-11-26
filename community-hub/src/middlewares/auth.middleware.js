import jwt from 'jsonwebtoken';
import { prisma } from '../utiles/prisma/index.js';


export default async function (req, res, next) {
  try {
// 1. 클라이언트로 부터 **쿠키(Cookie)**를 전달받습니다.
    const { authorization } = req.cookies;
    if (!authorization) throw new Error('토큰이 존재하지 않습니다.');

// 2. **쿠키(Cookie)**가 **Bearer 토큰** 형식인지 확인합니다.
    const [tokenType, token] = authorization.split(' ');
    if (tokenType !== 'Bearer')
      throw new Error('토큰 타입이 Bearer타입이 아닙니다.');

// 3. 서버에서 발급한 **JWT가 맞는지 검증**합니다.
    const decodedToken = jwt.verify(token, 'custom-secret-key');
    const userId = decodedToken.userId;

// 4. JWT의 `userId`를 이용해 사용자를 조회합니다.
    const user = await prisma.users.findFirst({
      where: { userId: +userId },
    });
    if (!user) {
      res.clearCookie('authorization');
      throw new Error('토큰 사용자가 존재하지 않습니다.');
    }

// 5. `req.user` 에 조회된 사용자 정보를 할당합니다.
    req.user = user;

// 6. 다음 미들웨어를 실행합니다.
    next();
  } catch (error) {
    res.clearCookie('authorization');

    // 토큰이 만료되었거나, 조작되었을 때, 에러 메시지를 다르게 출력합니다.
    switch (error.name) {
      case 'TokenExpiredError':
        return res.status(401).json({ message: '토큰이 만료되었습니다.' });
      case 'JsonWebTokenError':
        return res.status(401).json({ message: '토큰이 조작되었습니다.' });
      default:
        return res
          .status(401)
          .json({ message: error.message ?? '비정상적인 요청입니다.' });
    }
  }
}