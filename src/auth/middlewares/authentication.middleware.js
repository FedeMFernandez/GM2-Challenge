const jwt = require("jsonwebtoken");
const {
  UnauthorizedException,
} = require("../exceptions/unauthorized.exception");

function AuthenticateJWTMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) throw new UnauthorizedException();
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      throw new UnauthorizedException();
    }

    req.user = user;
    next();
  });
}

exports.AuthenticateJWTMiddleware = AuthenticateJWTMiddleware;
