const Task = require('./task.model');

const TASKS = [];

const getTasksByBoardId = async (boardId) => (
  TASKS.filter( task => (
    task.boardId === boardId
  ))
);

const createTask = async (boardId, schema) => {
  const newTask = new Task({...schema, boardId});
  TASKS.push(newTask);

  return newTask;
};

const getTaskById = async (taskId) => (
  TASKS.find( task => (
    task.id === taskId
  )) || null
);

const updateTaskById = async (taskId, schema) => {
  const currentTask = TASKS.find( task => (
    task.id === taskId
  ));

  if (!currentTask) return false

  return Object.assign(currentTask, schema);
};

const deleteTaskById = async (taskId) => {
  const taskIndex = TASKS.findIndex( task => (
    task.id === taskId
  ));

  if (taskIndex < 0) return false

  const deletedTask = TASKS[taskIndex];

  TASKS.splice(taskIndex, 1);

  return deletedTask
};

const deleteTasksByBoardId = async (boardId) => {
  const tasksToDelete = await getTasksByBoardId(boardId);

  tasksToDelete.forEach( task => {
    deleteTaskById(task.id)
  })

  return true
};

const unassignTasksByUserId = async (userId) => {
  const userTasks = TASKS.filter( task => (
    task.userId === userId
  ));

  for (let i = 0; i < userTasks.length; i += 1) {
    userTasks[i].userId = null;
  }

  return true
}

module.exports = {
  getTasksByBoardId,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  deleteTasksByBoardId,
  unassignTasksByUserId,
};
