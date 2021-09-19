const getAll = require("./getAll");
const getContactById = require("./getById");
const addContact = require("./addContact");
const updateContactById = require("./updateContact");
const removeContactById = require("./removeContact");

module.exports = { 
    getAll,
    getContactById,
    addContact,
    updateContactById,
    removeContactById 
}