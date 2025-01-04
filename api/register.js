// API to handle form submissions
module.exports = async (req, res) => { 
    const { name, email, mobile, profession, additional, paymentStatus} = req.body;

    // Validation
    // if (!name || !email || !mobile || !profession || !paymentStatus) {
    //     return res.status(400).json({ error: "All required fields must be filled" });
    // }

    // Create and save user in the database
    const newUser = new User({ name, email, mobile, profession, additional, paymentStatus});
    try {
        await newUser.save();
        res.status(201).send("User registered successfully!");
    } catch (error) {
        res.status(500).send("Error saving user: " + error.message);
    }
};
