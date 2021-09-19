const contacts = require("./contacts");

// ----Проверка работоспособности функций для шага 3---
/* Задачи:
1. Считать все товары
2. Считать товар по ид
3. Добавить товар
4. Обновить товар по ид
5. Удалить товар по ид
*/

/* Данные используемые для проверки:
const id = 11;
const delId = 11;
const newData = {
    "name": "Allena Raymonda",
    "email": "nullaa.ante@vestibul.co.uk",
    "phone": "(992) 914-3792"
  };
  const newUpdateData = {
    "name": "Allenaaaaaeeee Raymonda",
  };
*/

/* Самовызывающая функция для проверки:
  (async()=>{
    try{
    FOR listContacts()
        const allContacts = await contacts.listContacts();
        console.log(allContacts);

    FOR getContactById(contactId)
        const oneContact = await contacts.getContactById(id);
        if (!oneContact){
            throw new Error(`Contact with id=${id} not found`);
        }
        console.log(oneContact);

    FOR addContact(name, email, phone)
        await contacts.addContact("Allenaaa Raymonda", "nullasa.ante@vestibul.co.uk", "(992) 914-3592")
        console.log("Successfully added");

    FOR updateContactById(contactId, data)
        const updateContact = await contacts.updateContactById(id, newUpdateData);
        if (!updateContact){
            throw new Error(`Contact with id=${id} not found`);
        }
        console.log(newUpdateData);

    FOR removeContact(contactId)
        const result = await contacts.removeContact(delId);
        if (!result){
            throw new Error(`Contact with id=${id} not found`);
        }
        console.log("Successfully remove");
        }
    catch(error){
        console.log(error.message);
    }
})(); */

// ----Конец проверки работоспособности функций---
 

/*WITH yargs
// const argv = require('yargs').argv;

// async function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
//       case 'list':
//         const allContacts = await contacts.listContacts();
//         console.log(allContacts);
//         break;
  
//       case 'get':
//         const oneContact = await contacts.getContactById(id);
//         if (!oneContact){
//             throw new Error(`Contact with id=${id} not found`);
//         }
//         console.log(oneContact);
//         break;
  
//       case 'add':
//         await contacts.addContact(name, email, phone)
//         console.log("Successfully added");
//         break;
  
//       case 'remove':
//         const result = await contacts.removeContact(id);
//         if (!result){
//             throw new Error(`Contact with id=${id} not found`);
//         }
//         console.log("Successfully remove");
//         break;

//     case 'update':
//         const updateContact = await contacts.updateContactById(id, name);
//         if (!updateContact){
//             throw new Error(`Contact with id=${id} not found`);
//         }
//         console.log(updateContact);
//         break;
  
//       default:
//         console.warn('\x1B[31m Unknown action type!');
//     }
//   }
  
//   invokeAction(argv);
*/

/*WITH commander*/
const { program } = require('commander');
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();
console.log(argv);

async function invokeAction(argv) {
  const { action, id, name, email, phone } = argv;
  switch (action) {
    case 'list':
        const allContacts = await contacts.listContacts();
        console.log(allContacts);
      break;

    case 'get':
      const oneContact = await contacts.getContactById(Number(id));
      if (!oneContact){
          throw new Error(`Contact with id=${id} not found`);
      }
      console.log(oneContact);
      break;

    case 'add':
        await contacts.addContact(name, email, phone)
        console.log("Successfully added");
      break;

    case 'remove':
        const result = await contacts.removeContact(Number(id));
        if (!result){
            throw new Error(`Contact with id=${id} not found`);
        }
        console.log("Successfully remove");
      break;
    
    case 'update':
        const updateContact = await contacts.updateContactById(Number(id), name);
        if (!updateContact){
            throw new Error(`Contact with id=${id} not found`);
        }
        console.log(updateContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);