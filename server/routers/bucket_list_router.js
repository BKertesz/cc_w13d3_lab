const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const bucketListRouter = function(bucketListCollection){

  router.get('/',(req,res)=>{
    bucketListCollection.find().toArray().then((docs)=>res.json(docs))
  });

  router.post('/',(req,res)=>{
    const newCountry = req.body;
    bucketListCollection.insertOne(newCountry).then(()=>{
      bucketListCollection.find().toArray().then((docs)=>res.json(docs))
    });
  });

  router.get('/:id',(req,res)=>{
    const id = req.params.id;
    bucketListCollection.findOne({_id: ObjectID(id)})
    .then((docs)=>res.json(docs))
  })

  router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    bucketListCollection
    .deleteOne({_id: ObjectID(id)})
    .then(()=>{
      bucketListCollection
      .find()
      .toArray()
      .then((docs)=>res.json(docs))
    })
  })

  return router;

}

module.exports = bucketListRouter;
