const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true,
    },
    tag: {
        type: 'string',
        default: 'general'
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;