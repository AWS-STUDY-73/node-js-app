const express = require('express');  
const router = express.Router();  
const User = require('../models/User');  
const bcrypt = require('bcryptjs');  

// Register a user  
router.post('/register', async (req, res) => {  
    const { name, email, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);  
    const newUser = new User({ name, email, password: hashedPassword });  
    try {  
        await newUser.save();  
        res.status(201).json({ message: 'User registered successfully' });  
    } catch (err) {  
        res.status(400).json({ message: 'Error registering user' });  
    }  
});  

// ... (implement login and other user-related routes)  

module.exports = router;