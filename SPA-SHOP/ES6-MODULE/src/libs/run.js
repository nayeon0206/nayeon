import math from "./math.js"
import authenticationMiddleware from "../middleware/authentication.middleware.js"
import baseException from "../exception/base.exception.js"

math();
authenticationMiddleware();
baseException();

// 터미널에 불러올때 경로를 확실하게 해줘야 한다.!!

