"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* mongoose.connect('mongodb+srv://lccccastro:1G0FRFpGvXeaUCbp@webapi.szbzzhy.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('DB is connected'))
    .catch(error=>console.log(error)) */

_mongoose["default"].connect('mongodb+srv://lccccastro:1G0FRFpGvXeaUCbp@webapi.szbzzhy.mongodb.net/?retryWrites=true&w=majority').then(function (db) {
  return console.log('DB is connected');
})["catch"](function (error) {
  return console.log(error);
});