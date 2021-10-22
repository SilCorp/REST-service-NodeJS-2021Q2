const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAllUsers();
const getById = (userId) => usersRepo.getUserById(userId);
const create = (schema) => usersRepo.createUser(schema);
const deleteById = (userId) => usersRepo.deleteUserById(userId);
const updateById = (userId, schema) => usersRepo.updateUserById(userId, schema);

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
};
