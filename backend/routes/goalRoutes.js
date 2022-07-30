const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

/* INSTEAD OF THIS
router.get('/', getGoals)

router.post('/', setGoals)
*/

//It can be shortened to this
router.route('/').get(getGoals).post(setGoals)

router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router 