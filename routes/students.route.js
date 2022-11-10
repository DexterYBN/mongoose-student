const { Router } = require('express');
const { studentController } = require('../controllers/students.controllers');

const router = Router()

router.get('/', studentController.getStudent)
router.post('/', studentController.postStudent)
router.delete('/:id', studentController.delStudentById)
router.patch('/:id', studentController.patchStudentById)



module.exports = router;