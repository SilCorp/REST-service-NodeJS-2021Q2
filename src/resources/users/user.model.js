const { v4: uuid} = require('uuid');

/** Class representing a user. */
class User {
  /**
   * Create a user
   * @param id {string|number} User id
   * @param name {string} User name
   * @param login {string} User name
   * @param password {string} User password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
