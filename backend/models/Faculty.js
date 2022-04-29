const mongoose = require('mongoose');
const {Schema}=mongoose;
const FacultySchema = new Schema({
    firstName:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    password:{
        type: 'string',
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const Faculty=mongoose.model('Faculty', FacultySchema);
module.exports=Faculty;