const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

// MongoDB connection
// Replace with your MongoDB URI
const uri = 'mongodb+srv://prabhat4686:iKN_QTu4TAxb966@cluster0.1ke96.mongodb.net/data-science-coaching'; 
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
const User = mongoose.model('User', userSchema,'ds-beginner-offline');

// // API to handle form submissions
// app.post('/register', async (req, res) => { 
//     const { name, email, mobile, profession, additional, paymentStatus} = req.body;

//     // Validation
//     // if (!name || !email || !mobile || !profession || !paymentStatus) {
//     //     return res.status(400).json({ error: "All required fields must be filled" });
//     // }

//     // Create and save user in the database
//     const newUser = new User({ name, email, mobile, profession, additional, paymentStatus});
//     try {
//         await newUser.save();
//         res.status(201).send("User registered successfully!");
//     } catch (error) {
//         res.status(500).send("Error saving user: " + error.message);
//     }
// });

// Use the environment variable
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// If using local, Start the server
// app.listen(port, () => {
//     console.log("Server running on http://localhost:3000");
// });

// Export the app for Vercel
module.exports = app;
