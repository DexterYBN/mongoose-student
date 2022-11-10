const { Router } = require('express')
const router = Router()

router.use('/student', require('./students.route'))

module.exports = router;