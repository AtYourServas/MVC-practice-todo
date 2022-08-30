// Handling of GET request for edit page
// Handle editting and deleting items

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

// add specific routes for specific tasks

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', editController.updateTask)

module.exports = router