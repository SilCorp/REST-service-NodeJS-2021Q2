const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (userId) => usersRepo.getUserById(userId);
const createUser = (schema) => usersRepo.createUser(schema);

module.exports = { getAll, getById, createUser };
