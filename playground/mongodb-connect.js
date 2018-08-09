// const MongoClient = require('mongodb').MongoClient
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').insertOne({
  //   text: 'Work out!',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to connect', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  // console.log('Connected to the MongoDB server');

  db.collection('Users').insertOne({
    name: 'Honey',
    age: 27,
    location: 'Pune'
  }, (err, result) => {
    if (err) {
      return console.log('Oopsie!', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.close();
});
