var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, database) {

  if (err) throw err

  var db = database.db(process.argv[2])
  var collection = db.collection(process.argv[3])

  collection.deleteOne({
    _id: process.argv[4]
  })

  database.close()
})
