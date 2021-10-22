const { v4: uuid} = require('uuid');

class Task {
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
