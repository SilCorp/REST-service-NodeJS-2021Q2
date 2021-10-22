const Board = require('./board.model');
const { deleteTasksByBoardId } = require('../tasks/task.service');

const BOARDS = [];

const getAllBoards = async () => BOARDS;

const createBoard = async (boardSchema) => {
  const newBoard = new Board(boardSchema);

  BOARDS.push(newBoard);

  return newBoard
};

const getBoardById = async (boardId) => (
  BOARDS.find( board => (
    board.id === boardId
  ))
);

const updateBoardById = async (boardId, schema) => {
  const boardIndex = BOARDS.findIndex( board => (
    board.id === boardId
  ));

  if (boardIndex < 0) return false

  const newBoard = new Board(schema);
  BOARDS[boardIndex] = newBoard;

  return newBoard
};

const deleteBoardById = async (boardId) => {
  const boardIndex = BOARDS.findIndex( board => (
    board.id === boardId
  ))

  if (boardIndex < 0) return false

  const deletedBoard = BOARDS[boardIndex];

  BOARDS.splice(boardIndex, 1);

  await deleteTasksByBoardId(boardId);

  return deletedBoard
}

module.exports = {
  getAllBoards,
  createBoard,
  getBoardById,
  updateBoardById,
  deleteBoardById,
  BOARDS,
};
