const Student = require('../models/students')
exports.getAllStudent = async (req, res, next) => {
  const students = await Student.findAll();;
  res.status(200).json(students)
}
exports.save = async (req, res, next) => {
  try {
    const stu = req.body;
    const newStu = await new Student(null,stu.name,stu.age ).save()
    res.status(201).json(newStu.ops);
  } catch (err) {
    next(err)
  }
}
exports.getById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }

}
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = req.body;
    const updateStudent = new Student(id, student.title, student.name,student.age);
    await updateStudent.update()
    res.status(200).json(updateStudent)
  } catch (err) {
    next(err)
  }
}
exports.delete = async (req, res, next) => {
  try {
    await Student.deleteById(req.params.id)
    res.status(200).json({ deleted: "successfully" })
  } catch (err) {
    next(err)
  }
}


