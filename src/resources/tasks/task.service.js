const tasksRepo = require('./task.memory.repository');

/**
 * Returns tasks by board id
 * @param boardId {number|string} Board Id
 * @returns {Promise<Array<Task>>} Array of tasks
 */
const getByBoardId = async (boardId) => tasksRepo.getTasksByBoardId(boardId);

/**
 * Create task in board by schema
 * @param boardId {number|string} Board Id
 * @param schema {Object} Task schema
 * @returns {Promise<Task>} Created task
 */
const create = (boardId, schema) => tasksRepo.createTask(boardId, schema);

/**
 * Returns task by id
 * @param taskId {number|string} Task id
 * @returns {Promise<Task|null>} Found task or null
 */
const getByTaskId = (taskId) => tasksRepo.getTaskById(taskId);

/**
 * Update task by schema
 * @param taskId {number|string} Task id
 * @param schema {Object} Task schema
 * @returns {Promise<false|Task>} Updated task or false
 */
const updateByTaskId = (taskId, schema) => tasksRepo.updateTaskById(taskId, schema);

/**
 * Delete task by id
 * @param taskId {number|string} Task id
 * @returns {Promise<Task|false>} Returns deleted task or false
 */
const deleteByTaskId = (taskId) => tasksRepo.deleteTaskById(taskId);

/**
 * Delete tasks by board id
 * @param boardId {number|string} Board id
 * @returns {Promise<true>} True
 */
const deleteTasksByBoardId = (boardId) => tasksRepo.deleteTasksByBoardId(boardId);

/**
 * Unassign user from tasks by user id
 * @param userId {number|string} User id
 * @returns {Promise<true>} Returns true
 */
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
