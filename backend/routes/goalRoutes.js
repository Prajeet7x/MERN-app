const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

/* INSTEAD OF THIS
router.get('/', getGoals)

router.post('/', setGoals)
*/

//It can be shortened to this
router.route('/').get(protect, getGoals).post(protect, setGoals)

router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

module.exports = router 