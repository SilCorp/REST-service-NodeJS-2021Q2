const router = require('express').Router();
const boardersService = require('./board.service');

router.route('/')
  // Returns all boards
  .get(async (req, res) => {
    res.json(await boardersService.getAll())
  })

  // Creates a new board
  .post(async (req, res) => {
    const schema = req.body;
    const newBoard = await boardersService.create(schema);

    res
      .status(201)
      .json(newBoard)
  })

router.route('/:boardId')
  // Gets the Board by ID
  .get( async (req, res) => {
    const { boardId } = req.params;
    const board = await boardersService.getById(boardId);

    if (board) {
      res.json(board)
    } else {
      res.sendStatus(404);
    }
  })

  // Updates a Board by ID
  .put( async (req, res) => {
    const { boardId } = req.params;
    const schema = req.body;

    const updatedBoard = await boardersService.updateById(boardId, schema);

    if (updatedBoard) {
      res
        .status(200)
        .json(updatedBoard)
    } else {
      res.sendStatus(400)
    }
  })

  // Deletes a Board by ID. When somebody DELETE Board, all its Tasks should be deleted as well
  .delete(async (req, res) => {
    const { boardId } = req.params;

    const isDeleted = boardersService.deleteById(boardId);

    if (isDeleted) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  })

module.exports = router;
