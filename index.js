
const mongoose = require('mongoose');

function extendSchema (Schema, definition, options) {
  var toReturn = new mongoose.Schema(
    Object.assign({}, Schema.obj, definition),
    options
  );
  toReturn.callQueue = [].concat(Schema.callQueue); // copy hooks
  return toReturn;
}

module.exports = extendSchema;
