import math from "./math.js"
import authenticationMiddleware from "../middleware/authentication.middleware.js"
import baseException from "../exception/base.exception.js"

math();
authenticationMiddleware();
baseException();