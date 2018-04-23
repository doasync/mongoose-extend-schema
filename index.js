const mongoose = require("mongoose");

function extendSchema(parent, child, options) {
  let updated_schema = Object.assign({}, parent.obj, child);
  let updated_child_object = new mongoose.Schema(updated_schema, options);
  __extends(updated_child_object, parent);
  return updated_child_object;
}

var __extends =
  (this && this.__extends) ||
  function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p)) {
        //array
        if (Array.isArray(b[p]) && Array.isArray(d[p])) {
          d[p] = Array.from(new Set(d[p].concat(b[p])));
        } else {
          //actual object
          d[p] = Object.assign({}, b[p], d[p]);
        }
      }
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };

module.exports = extendSchema;
