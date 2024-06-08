const express = require('express');
const router = express.Router();
const { Form } = require('../models/Form');

// Get all forms
router.get('/', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific form by ID
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.json(form);
    } catch (error) {
        console.error('Error fetching form:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a new form
router.post('/', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (error) {
        console.error('Error creating form:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a form by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedForm) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.json(updatedForm);
    } catch (error) {
        console.error('Error updating form:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a form by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.json({ message: 'Form deleted successfully' });
    } catch (error) {
        console.error('Error deleting form:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
