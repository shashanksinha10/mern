const asyncHandler = require('express-async-handler')
// @des Get goals
// @route get /api/goals
// @access private

const getGoals = asyncHandler ( async (req, res) => {
    res.status(200).json({ message: 'get goal' })
})

// @des post goals
// @route post /api/goals
// @access private

const setGoal = asyncHandler ( async (req, res) => {

    if(!req.body.text) {
       res.status(400)
       throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'set goal' })
})

// @des put goals
// @route put /api/goals/:id
// @access private

const updateGoal = asyncHandler ( async (req, res) => {res.status(200).json({ message: `update goal ${req.params.id}` })})

// @des delete goals
// @route delete /api/goals
// @access private

const deleteGoal = asyncHandler ( async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}