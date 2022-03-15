var express = require('express');
var router = express.Router();

//var mongodb = require('mongodb');
const {MongoClient} = require('mongodb');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/mongodb', async function (request, response) {

  const client = await MongoClient.connect("mongodb+srv://user-test:Group7@cluster0.jdij5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db('myFirstDatabase');
  const items = await db.collection('Users').find({}).toArray();
  console.log(items);
  response.render('mongodb', { items: items });
  client.close();
});