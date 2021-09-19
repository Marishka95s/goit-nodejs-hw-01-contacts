// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", (error, data) => {
//     if (error) {
//         throw error;
//         console.log(error);
//     }    
//     console.log(data);
// })


// const fs = require("fs/promises");
// fs.readFile("text.txt", "utf-8")
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error.message))


// const fs = require("fs/promises");
// const readFile = async(filePath) => {
//     try {
//         const data = await fs.readFile(filePath,"utf-8");
//         console.log(data);
//     }
//     catch(error) {
//         error.mesage = "file wasn't read";
//     }
// }
// readFile("text.txt");


// const fs = require("fs/promises");

// const fileOperation = async(filePath, type ="read", data="") => {
//     switch(type) {
//         case "read":
//             return await fs.readFile(filePath, "utf-8"); 
//         case "add":
//             return await fs.appendFile(filePath, data); 
//         case "rewrite":
//             return await fs.writeFile(filePath, data); 
//     }
// }

// const file = "text.txt";
// const file1 = "text1.txt";
  
    // (async() => {
    //     try {
            // const result = await fileOperation(file);
            // console.log(result);
            // const result = await fileOperation(file, "add", "welcome to nodejs");
            // console.log("added data");
            // await fileOperation(file, "add", "\nwelcome to nodejs");
            // console.log("added data");
    //         await fileOperation(file, "rewrite", "Sayonara1:)");
    //         console.log("rewrited data");
    //     }
    //     catch(error){
    //         console.log(error.message);
    //     }
    // })();

    // ---The same with then catch---
    // const result1 = fileOperation(file);
    // result1
    //     .then(data=>console.log(data))
    //     .catch(error=>console.log(error.message))


// const contactOperations = require("./db/contactsOperations/index");    
/*
1. Считать все товари
2. Считать товар по ид
3. Добавить товар
4. Обновить товар по ид
5. Удалить товар по ид
*/
// const id = 11;
// const delId = 11;
// const newData = {
//     "name": "Allena Raymonda",
//     "email": "nullaa.ante@vestibul.co.uk",
//     "phone": "(992) 914-3792"
//   };
//   const newUpdateData = {
//     "name": "Allenaaaaa Raymonda",
//   };
// (async()=>{
//     try{
        // const contacts = await contactOperations.getAll();
        // console.log(contacts);

        // const oneContact = await contactOperations.getContactById(id);
        // if (!oneContact){
        //     throw new Error(`Contact with id=${id} not found`);
        // }
        // console.log(oneContact);

        // const newContact = await contactOperations.addContact(newData);
        // console.log(newContact);

        // const updateContact = await contactOperations.updateContactById(id, newUpdateData);
        // if (!updateContact){
        //     throw new Error(`Contact with id=${id} not found`);
        // }
        // console.log(newUpdateData);

//         const result = await contactOperations.removeContactById(delId);
//         if (!result){
//             throw new Error(`Contact with id=${id} not found`);
//         }
//         console.log("Successful remove");
//     }
//     catch(error){
//         console.log(error.message);
//     }
// })();