var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, database) {

  if (err) throw err

  var db = database.db('learnyoumongo')
  var collection = db.collection('parrots')
  var i = parseInt(process.argv[2]);

  collection.find({
    age: {$gt: i}
  }).project({
    _id: 0
  }).toArray(function(err, documents) {
    if (err) throw err
    console.log(documents)
  })

  database.close()
})
