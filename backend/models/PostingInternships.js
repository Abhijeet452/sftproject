const mongoose = require('mongoose');
const { Schema } = mongoose;
const InternshipSchema = new Schema({
    faculty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    jobTitle: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    organizationName: {
        type: 'string',
        required: true
    },
    workType: {
        type: String,
    },
    experienceRequired: {
        type: 'Number',
    },
    duration: {
        type: 'Number',
    },
    organizationUrl: {
        type: 'string',
        required: true
    },
    stipend: {
        type: 'Number',
        required: true
    },
    skills: [{
        type: String
    }],
    datePosted: {
        type: Date,
        default: Date.now
    }
    // validThrough: {
    //     type: Date,
    //     default: Date.now + 90 * 24 * 60 * 60
    // }
},
    {
        timestamps: true,
    });
const Internship = mongoose.model('Internship', InternshipSchema);
module.exports = Internship;