const User = require('./user.model');

const USERS = [];

const getAll = async () => USERS;
const getUserById = async (userId) => (
  USERS.find( user => (
    user.id === userId
  ))
);
const createUser = async (schema) => {
  const { name, login, password } = schema;
  const newUser = new User({name, login, password});
  USERS.push(newUser);

  return newUser
}

module.exports = {
  getAll,
  getUserById,
  createUser,
};
