const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const updateContactById = async (id, data) => {
    const contacts = await getAll();
    const idx = contacts.findIndex(item=>item.id === id);
    
    if(idx === -1) {
        return null;
    }
    const { type, newInfo } = data;    
    contacts[idx] = { ...contacts[idx], [type]: [newInfo] };
    await updateContacts(contacts);
    return contacts[idx];
    // const contact = contacts.find(item=>item.id === id);
    // if(!contact){
    //     return null;
    // }
    // return product;
}

module.exports = updateContactById;