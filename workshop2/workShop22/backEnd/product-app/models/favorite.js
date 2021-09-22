const getDb = require("../util/database").getDB;
const {ObjectId} = require("mongodb");
module.exports = class FavoriteMovie {
    static save(favMovie) {
        return getDb().collection("favorites").insertOne(favMovie);
    }
    static findAll() {
        return getDb().collection("favorites").find().toArray();
    }
    static deleteById(id) {
        return getDb().collection("favorites").deleteOne({ _id: id });
    }
}
