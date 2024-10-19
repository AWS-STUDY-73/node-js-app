const mongoose = require('mongoose');  

const ProjectSchema = new mongoose.Schema({  
    user_id: {  
        type: mongoose.Schema.Types.ObjectId,  
        required: true,  
        ref: 'User'  
    },  
    project_title: String,  
    project_description: String,  
    technologies_used: String,  
    link_to_project: String  
});  

module.exports = mongoose.model('Project', ProjectSchema);