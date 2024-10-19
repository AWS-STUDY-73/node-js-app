const mongoose = require('mongoose');  

const SkillSchema = new mongoose.Schema({  
    user_id: {  
        type: mongoose.Schema.Types.ObjectId,  
        required: true,  
        ref: 'User'  
    },  
    skill_name: String,  
    proficiency_level: String  
});  

module.exports = mongoose.model('Skill', SkillSchema);