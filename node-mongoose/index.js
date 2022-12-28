const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/dishDB';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(
            dish._id,
            { $set: { description: 'Updated test' } },
            { new: true } // return updated value
        )
        .exec();
    })
    .then((dish) => {
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        }); // array method to push to comments

        return dish.save(); // save to db
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.deleteOne({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});