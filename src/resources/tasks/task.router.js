const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/:boardId/tasks')
  // Gets tasks by the Board ID
  .get( async (req, res) => {
    const { boardId } = req.params;
    res.json(await tasksService.getByBoardId(boardId));
  })

  // Creates a new task
  .post(async (req, res) => {
    const schema = req.body;
    const { boardId } = req.params;

    res
      .status(201)
      .json(await tasksService.create(boardId, schema))
  })

router.route('/:boardId/tasks/:taskId')
  // Gets the Task by the task ID
  .get( async (req, res) => {
    const { taskId } = req.params;

    const task = await tasksService.getByTaskId(taskId);

    if (task) {
      res.json(task);
    } else {
      res.sendStatus(404);
    }
  })

  // Updates the Task by ID
  .put( async (req, res) => {
    const { taskId } = req.params;
    const schema = req.body;

    const updatedTask = await tasksService.updateByTaskId(taskId, schema);

    if (updatedTask) {
      res.json(updatedTask)
    } else {
      res.sendStatus(404)
    }
  })

  // Deletes Task by ID
  .delete( async (req, res) => {
    const { taskId } = req.params;

    const isDeleted = await tasksService.deleteByTaskId(taskId);

    if (isDeleted) {
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  })

module.exports = router;
