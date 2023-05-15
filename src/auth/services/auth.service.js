const { userRepository } = require("../../user/repositories/user.repository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
  async login(email, password) {
    const {
      id: userId,
      roleId,
      password: currentPassword,
    } = await userRepository.getOneByEmail(email);

    const isValidPassword = await bcrypt.compare(password, currentPassword);

    if (!(userId && isValidPassword)) return null;

    const token = jwt.sign(
      {
        userId,
        email,
        roleId,
      },
      process.env.JWT_SECRET_KEY
    );

    return token;
  }
}

exports.authService = new AuthService();
