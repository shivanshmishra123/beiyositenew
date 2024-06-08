const express = require('express');
const router = express.Router();
const { OwnerForm } = require('../models/OwnerForm');

// Get all owners
router.get('/', async (req, res) => {
    try {
        const owners = await OwnerForm.find();
        res.json(owners);
    } catch (error) {
        console.error('Error fetching owners:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific owner by ID
router.get('/:id', async (req, res) => {
    try {
        const owner = await OwnerForm.findById(req.params.id);
        if (!owner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.json(owner);
    } catch (error) {
        console.error('Error fetching owner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a new owner
router.post('/', async (req, res) => {
    try {
        const newOwner = new OwnerForm(req.body);
        const savedOwner = await newOwner.save();
        res.status(201).json(savedOwner);
    } catch (error) {
        console.error('Error creating owner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an owner by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedOwner = await OwnerForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOwner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.json(updatedOwner);
    } catch (error) {
        console.error('Error updating owner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete an owner by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedOwner = await OwnerForm.findByIdAndDelete(req.params.id);
        if (!deletedOwner) {
            return res.status(404).json({ error: 'Owner not found' });
        }
        res.json({ message: 'Owner deleted successfully' });
    } catch (error) {
        console.error('Error deleting owner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
