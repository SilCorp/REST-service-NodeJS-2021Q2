const User = require('./user.model');
const { unassignTasksByUserId } = require('../tasks/task.service');

const USERS = [];

const getAllUsers = async () => USERS;

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
};

const deleteUserById = async (userId) => {
  const userIndex = USERS.findIndex( user => (
    user.id === userId
  ));
  if (userIndex < 0) return false
  
  USERS.splice(userIndex, 1);

  await unassignTasksByUserId(userId);

  return true
};

const updateUserById = async (userId, schema) => {
  const user = await getUserById(userId);
  if (!user) return false

  return Object.assign(user, schema)
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
