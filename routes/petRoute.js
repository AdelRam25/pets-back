const express = require('express')
const petsController = require('../controllers/petsController')
const router = express.Router()


router.get('/pets', petsController.getPets);
router.post('/pets', petsController.addPet);
router.get('/pets/:id', petsController.viewPet);
router.put('/pets/:id', petsController.updatePet);
router.delete('/pets/:id', petsController.deletePet);

module.exports= router