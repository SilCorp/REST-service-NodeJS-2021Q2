const boardsRepo = require('./board.memory.repository');

/**
 * Returns all boards
 * @returns {Promise<Array<Board>>} Array of boards
 */
const getAll = () => boardsRepo.getAllBoards();

/**
 * Create a board by schema
 * @param schema {Object} Board schema
 * @returns {Promise<Board>} Created board
 */
const create = (schema) => boardsRepo.createBoard(schema);

/**
 * Returns board by id
 * @param boardId {number|string} Board id
 * @returns {Promise<Board|false>} Found board or false
 */
const getById = (boardId) => boardsRepo.getBoardById(boardId);

/**
 * Update board from schema
 * @param boardId {number|string} Board id
 * @param schema {Object} Board schema
 * @returns {Promise<false|Board>} Updated board or false
 */
const updateById = (boardId, schema) => boardsRepo.updateBoardById(boardId, schema);

/**
 * Delete board by id
 * @param boardId {number|string} Board id
 * @returns {Promise<false|Board>} Deleted board or false
 */
const deleteById = (boardId) => boardsRepo.deleteBoardById(boardId);

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
