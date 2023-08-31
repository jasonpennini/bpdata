const express = require ('express');
const {
    getSinglePractice,
    createPractice,
    getAllPractices,
    deletePractice,
    updatePractice
} = require('../controllers/bpcontroller');
const router = express.Router();

// GET all practices
router.get('/', getAllPractices);

// GET a data from a single practice
router.get('/:_id', getSinglePractice);

// CREATE a practice 
router.post('/', createPractice);

//DELETE a practice
router.delete('/:_id', deletePractice);

// UPDATE a practice
router.patch('/:_id', updatePractice);

module.exports = router;