const { v4: uuid} = require('uuid');

/** Class representing a column. */
class Column {
  /**
   * Create a column
   * @param id {string|number} Column id
   * @param title {string} Column title
   * @param order {number} Column order
   */
  constructor({
    id = uuid(),
    title = 'Column',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column