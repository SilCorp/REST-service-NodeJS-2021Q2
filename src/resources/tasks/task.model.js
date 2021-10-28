const { v4: uuid} = require('uuid');

/** Class representing task. */
class Task {
  /**
   * Create a task
   * @param id {string|number} Task id
   * @param title {string} Task title
   * @param order {number} Task order
   * @param description {string} Task description
   * @param userId {string|number | null} User id
   * @param boardId {string | number | null} Board id
   * @param columnId {string | number | null} Column id
   */
  constructor({
    id = uuid(),
    title = 'Task',
    order = 0,
    description = '',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id           = id;
    this.title        = title;
    this.order        = order;
    this.userId       = userId;
    this.boardId      = boardId;
    this.columnId     = columnId;
    this.description  = description;
  }
}

module.exports = Task;
