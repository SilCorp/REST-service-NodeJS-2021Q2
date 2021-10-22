const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAllBoards();
const create = (schema) => boardsRepo.createBoard(schema);
const getById = (boardId) => boardsRepo.getBoardById(boardId);
const updateById = (boardId, schema) => boardsRepo.updateBoardById(boardId, schema);
const deleteById = (boardId) => boardsRepo.deleteBoardById(boardId);

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
