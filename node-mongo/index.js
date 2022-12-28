const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'confusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to server');

    const db = client.db(dbname);

    const collection = db.collection('dishes');

    collection.insertOne({ "name": "Pizza", "description": "I am a Pizza" }, (err, result) => {
        assert.equal(err, null);

        console.log("After insert: \n");
        console.log("Result: " + result + " Operation: " + result.ops);

        console.log("Resulting collection: \n");
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);

            console.log(docs);

            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                client.close();
            });
        });
    });
});