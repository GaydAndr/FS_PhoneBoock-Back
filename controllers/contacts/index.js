const getAll = require('./getAll');
const getContactById = require('./getContactById');
const addCont = require('./addContact');
const updateContact = require('./updateContacts');
const removeContact = require('./removeContact');
const updateFavorite = require('./updateFavorite');

module.exports = {
  getAll,
  getContactById,
  addCont,
  updateContact,
  removeContact,
  updateFavorite,
};
