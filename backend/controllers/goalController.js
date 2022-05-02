const asyncHandler = require('asyncHandler')

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message:'Get Goal'})
})

// @desc    Set Goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a textfield')
    }
    res.status(200).json({message: 'Set Goal'})
})

// @desc    update Goals
// @route   PUT /api/goals
// @access  Private
const updateGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete Goals
// @route   DELETE /api/goals
// @access  Private
const deleteGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}