const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bucketListRouter = require('./bucket_list_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('bucket_list');
  const bucketListCollection = db.collection('bucketList');
  router.use('/api/bucketList', bucketListRouter(bucketListCollection));
});

module.exports = router;
