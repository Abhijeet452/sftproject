const express = require('express');
const fetchuser = require('../Middleware/fetchuser');
const fetchfaculty = require('../Middleware/fetchfaculty');
const router = express.Router();
const Note = require('../models/Note');
const PostingInternships = require('../models/PostingInternships');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get all the notes of a user using: GET "/api/notes/fetchallnotes". Login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 2: add a new note using : POST "/api/notes/addnote". Login required

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid Title').isLength({ min: 5 }),
    body('description', 'Enter a valid Description').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// ROUTE 2: add a new internship using : 
// POST "/api/internship/addinternship". Login required

router.post('/addinternship', fetchfaculty, [
    body('jobTitle', 'Enter a valid Title').isLength({ min: 5 }),
    body('description', 'Enter a valid Description').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { jobTitle, description, organizationName, workType, organizationUrl, stipend, skills,duration,experienceRequired } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const internship = new PostingInternships({
            jobTitle, description, organizationName, workType, organizationUrl, stipend, skills,duration,experienceRequired,faculty:req.user.id
        })
        const savedInternship = await internship.save();
        console.log(savedInternship);
        res.json(savedInternship);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})


// ROUTE 3: Update an existing note using : PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //create a newNote Object
    try {
        let newNote = {};
        if (title) {
            newNote.title = title
        }
        if (description) {
            newNote.description = description
        }
        if (tag) {
            newNote.tag = tag
        }
        //find the note to be updated and update it
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})



// ROUTE 4: Delete an existing note using : DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if this user owns this note 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");

    }

    //find the note to be deleted and delete it


})


module.exports = router;