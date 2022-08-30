// Iniital GET Request for Homepage
// Handles POST method for adding new tasks

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// add specific routes for specific tasks

router.get('/', 
    homeController.getIndex
)

router.post('/', 
    homeController.createTask
)

module.exports = router