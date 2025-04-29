const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const DB = require('./Schema/Connection');
const Model_Schema = require('./Schema/Schema');


const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000 || 3001;

app.get('/', (req, res) => {
    return res.send("Hello Dark Web");

})

app.post('/api/register', async (req, res) => {
    const { Name, Email, Password } = req.body;
    try {
        const user = await Model_Schema.findOne({ Email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const NewUser = await Model_Schema.create({ Name, Email, Password });
        if (NewUser) {
            return res.status(201).json({ msg: "User registered successfully" });
        }
    }
    catch{
        return res.status(500).json({ msg: "Internal server error" });
    }
})

app.post('/api/login', async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await Model_Schema.findOne({ Email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        if (user.Password !== Password) {
            return res.status(400).json({ message: "Invalid password" });
        }
        return res.status(200).json({ message: "Login successful" });

    }
    catch {
        return res.status(500).json({ message: "Internal server error" });
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    DB(); //CALLING THE CONNECTION
})