var mongo = require('mongodb').MongoClient

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, database) {

  if (err) throw err

  var db = database.db('learnyoumongo')
  var collection = db.collection('parrots')

  collection.find({
    'age': {$gt: parseInt(process.argv[2])}
  }).count(function (err, doc) {
    if (err) throw err
    console.log(doc)
  })

  database.close()
})
