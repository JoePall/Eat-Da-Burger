const orm = require("../config/orm.js");

var burger = {
  all: (completed) => orm.getAll("burger", completed),
  create: (objectData, completed) => orm.create("burger", objectData, completed),
  update: (objectData, completed) => orm.update("burger", objectData, completed),
};

module.exports = burger;