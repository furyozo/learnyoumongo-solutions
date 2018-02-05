var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, database) {

  if (err) throw err

  var db = database.db('learnyoumongo')
  var collection = db.collection('docs')

  var doc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
  }

  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
  })

  database.close()
})
