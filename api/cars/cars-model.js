const db = require("../../data/db-config");

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
}

const create = () => {
  return db('cars')
}

module.exports = {
  getAll,
  getById,
  create
}
