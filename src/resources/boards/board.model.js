const { v4: uuid} = require('uuid');
const Column = require('../columns/column.model');

class Board {
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
