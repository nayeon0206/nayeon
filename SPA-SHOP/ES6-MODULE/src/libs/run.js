import math from "./math.js"
import authenticationMiddleware from "../middleware/authentication.middleware.js"
import baseException from "../exception/base.exception.js"

math();
authenticationMiddleware();
baseException();

// 파일 경로를 확실하게 해주기!!