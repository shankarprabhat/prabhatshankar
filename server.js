const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

// Define a schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    profession: String,
    additional: String,
    paymentStatus: String
});
const User = mongoose.model('User', userSchema);

// API to handle form submissions
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Create and save user in the database
    const newUser = new User({ name, email, password });
    try {
        await newUser.save();
        res.status(201).send("User registered successfully!");
    } catch (error) {
        res.status(500).send("Error saving user: " + error.message);
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
