"use strict";

var _mongoose = require("mongoose");
var etapaSchema = new _mongoose.Schema({
  Fecha: {
    type: Date,
    required: true
  },
  Etapa: {
    type: String,
    required: true
  }
});
var mySchema = new _mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  },
  tecnico: {
    type: String,
    required: true
  },
  cliente: {
    type: String,
    required: true
  },
  Etapa: {
    type: [etapaSchema],
    required: false
  }
});
var MyModel = mongoose.model('MyModel', mySchema);
module.exports = MyModel;