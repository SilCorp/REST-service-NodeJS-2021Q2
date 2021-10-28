const usersRepo = require('./user.memory.repository');

/**
 * Returns all users
 * @returns {Promise<Array<User>>} Array of users
 */
const getAll = () => usersRepo.getAllUsers();

/**
 * Returns user by id
 * @param userId {string|number} User id
 * @returns {Promise<User|null>} User or null
 */
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
