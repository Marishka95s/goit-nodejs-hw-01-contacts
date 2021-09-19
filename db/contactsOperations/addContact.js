const fs = require("fs/promises");
const path = require("path");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts")
const contactsPath = path.join(__dirname, "contacts.json");

const addContact = async (data) => {
    const contacts = await getAll();
    const newId = contacts.length + 1;
    const newContact = {id: newId, ...data};
    contacts.push(newContact);

    await updateContacts(contacts);
    // await updateContacts(newContact);
    // await fs.writeFile(contactsPath, JSON.stringify(contacts));    
    return newContact;
}

module.exports = addContact;