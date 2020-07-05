// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID= mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager' 

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
}

    const db=client.db(databaseName)
    
    db.collection('users').deleteOne(
        {
            name:'Andrew'
        }
    ).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    // db.collection('users').findOne({_id:new ObjectID("5ef38c5144d02504ec32af7c")},(error,user)=>{
    //     if (error) {
    //         return console.log('Unable to connect to database!')

    //     }
    //     console.log(user)

    // })
    
    // const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'shaw',
    //     age: 27
    // },(error,result)=>{
    //     if(error){
    //         return console.log('unable to connect')
    //     }
    //     console.log(result.ops)
    // })
})