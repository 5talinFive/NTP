const { MongoClient } = require('mongodb');
const { MongoConnection } = require('../lib/Mongo');


//collection
const COLLECTION = "clientes"

const findUsers = () => new Promise( async (resolve, reject) => {
    
    try {
        //Mongo cliente para q retorne la configuracion db
        const DB = await MongoConnection();
        //OBTENEMOS LA COLLECTION
        const clients = DB.collection(COLLECTION);
        const clientsList = await clients.find({}).toArray()
        resolve(clientsList);
        
    } catch (error) {
        reject(error);        
    }
})

module.exports = {
    findUsers,
}