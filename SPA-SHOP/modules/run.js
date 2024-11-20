// modules/run.js

// ./math.js 파일에서 add 함수를 가져옵니다.
import math from './math.js'
import authenticationMiddleware from './authentication.middleware.js'
import baseException from './base.exception.js'


math();
baseException();
authenticationMiddleware();