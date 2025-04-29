const mongoose = require('mongoose');

const DB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/CodeForProgress')
            .then(() => {
            console.log('Connected to the database');
            })
            .catch(() => {
            console.log('Connection failed');
            })  
        }
     catch (error) {
        console.log(error);
    }
}

module.exports = DB;