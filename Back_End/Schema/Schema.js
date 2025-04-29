const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

const Model_Schema = mongoose.model('Model_Schema', Schema);

module.exports = Model_Schema;
