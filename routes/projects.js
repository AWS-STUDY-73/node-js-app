const express = require('express');  
const router = express.Router();  
const Project = require('../models/Project');  

// Get all projects by user  
router.get('/:userId', async (req, res) => {  
    const projects = await Project.find({ user_id: req.params.userId });  
    res.json(projects);  
});  

// Add a new project  
router.post('/', async (req, res) => {  
    const newProject = new Project(req.body);  
    await newProject.save();  
    res.json(newProject);  
});  

// ... (implement project update and delete routes)  

module.exports = router;