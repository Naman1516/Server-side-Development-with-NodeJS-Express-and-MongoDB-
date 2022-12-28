const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017';
const dbname = 'confusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to server');

    const db = client.db(dbname);

    dboper.insertDocument(db, { "name": "Vadonut", "description": "I am Vadonut" }, 'dishes', (result) => {
        console.log('Inserted Document:\n' + JSON.stringify(result.insertedIds));

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found Documents: \n' + JSON.stringify(docs));

            dboper.updateDocument(db, { name: "Vadonut" }, { description: "Updated Description" }, 'dishes', (result) => {
                console.log("Updated Document:\n", JSON.stringify(result));

                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents: \n' + JSON.stringify(docs));

                    db.dropCollection('dishes', () => {
                        client.close();
                    });
                });
            });
        });
    });
});