const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
require('dotenv').config();  

const app = express();  
app.use(cors());  
app.use(bodyParser.json());  
app.use(express.static('public')); // Serve static files from public folder  

// Database Connection  
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB connected'))  
    .catch(err => console.log(err));  

// Import Routes  
app.use('/api/users', require('./routes/users'));  
app.use('/api/skills', require('./routes/skills'));  
app.use('/api/projects', require('./routes/projects'));  

// Default route to serve HTML files  
app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/public/index.html');  
});  

// Start Server  
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
});