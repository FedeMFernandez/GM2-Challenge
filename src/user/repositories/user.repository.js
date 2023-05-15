const users = require("../../../__mock__/user");

class UserRepository {
  constructor() {
    this.User = users;
  }

  getOneByEmail(email) {
    return this.User.find((user) => user.email === email);
  }
}

exports.userRepository = new UserRepository();
