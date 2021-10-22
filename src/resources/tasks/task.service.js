const tasksRepo = require('./task.memory.repository');

const getByBoardId = async (boardId) => tasksRepo.getTasksByBoardId(boardId);
const create = (boardId, schema) => tasksRepo.createTask(boardId, schema);
const getByTaskId = (taskId) => tasksRepo.getTaskById(taskId);
const updateByTaskId = (taskId, schema) => tasksRepo.updateTaskById(taskId, schema);
const deleteByTaskId = (taskId) => tasksRepo.deleteTaskById(taskId);
const deleteTasksByBoardId = (boardId) => tasksRepo.deleteTasksByBoardId(boardId);
const unassignTasksByUserId = (userId) => tasksRepo.unassignTasksByUserId(userId);

module.exports = {
  getByBoardId,
  create,
  getByTaskId,
  updateByTaskId,
  deleteByTaskId,
  deleteTasksByBoardId,
  unassignTasksByUserId,
};
