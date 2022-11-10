const Student = require("../models/Student.model");

module.exports.studentController = {

    getStudent: function (req, res) {
        Student.find().then((Student) => {
            res.json(Student);
        });
    },

    postStudent: function (req, res) {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age,
        }).then((Student) => {
            res.json(Student);
        });
    },

    delStudentById: function (req, res) {
        Student.findByIdAndRemove(req.params.StudentId).then(() => {
            res.json('deleted');
        });
    },

    patchStudentById: function (req, res) {
        Student.findByIdAndUpdate(
            req.params.StudentId,
            {
                Student: req.body.Student,
            },
            { Student: true },
        ).then((Student) => {
            res.json(Student);
        });
    },

}