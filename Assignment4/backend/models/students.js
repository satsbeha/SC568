const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");

module.exports = class Student {
    constructor(_id, name,age) {
        this._id = _id;
        this.name=name;
        this.age=age;
    }
    save() {
        return getDb().collection("students").insertOne(this);
    }
    static findAll() {
        return getDb().collection("students").find().toArray();
    }
    static findById(id) {
        return getDb()
            .collection("students")
            .findOne({ _id: new ObjectID(id) });
    }
    update() {

        return getDb().collection("books").updateOne(
            { _id: new ObjectID(this._id) },
            {
                $set: {
                    title: this.title,
                    ISBN: this.ISBN,
                    publishDate: this.publishDate,
                    author: this.author
                },
            }
        );
    }
    static deleteById(id) {
        return getDb().collection("books").deleteOne({ _id: new ObjectID(id) });
    }
}
