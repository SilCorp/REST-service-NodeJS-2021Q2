const { v4: uuid} = require('uuid');
const Column = require('../columns/column.model');

/** Class representing a board. */
class Board {

  /**
   * Create a column
   * @param id {number|string} Column id
   * @param title {string} Column title
   * @param columns {Array<Column>} Columns
   */
  constructor({
    id = uuid(),
    title = 'Board',
    columns = [],
  } = {}) {
    const initColumns = columns.map( columnSchema => (
      new Column(columnSchema)
    ))

    this.id = id;
    this.title = title;
    this.columns = initColumns;
  }
}

module.exports = Board;
