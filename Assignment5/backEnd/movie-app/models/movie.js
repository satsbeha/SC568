const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
/*
  let movie={
        name:"Spider Man",
        rating:10,
        genre:"Adventure",
        director:"Jhon Watts",
        yearRelease:'2012-03-09',
    }
 */
module.exports = class Movie {
    
    constructor(_id, name,rating,genre,director,yearRelease,description) {
        this._id = _id;
        this.name=name;
        this.rating=rating;
        this.genre=genre;
        this.director=director;
        this.yearRelease=yearRelease;
        this.description=description;
    }
    save() {
        return getDb().collection("movies").insertOne(this);
    }
    static findAll() {
        return getDb().collection("movies").find().toArray();
    }
    static findById(id) {
        return getDb()
            .collection("movies")
            .findOne({ _id: new ObjectID(id) });
    }
    update() {

        return getDb().collection("movies").updateOne(
            { _id: new ObjectID(this._id) },
            {
                $set: {
                    name:this.name,
                    rating:this.rating,
                    genre:this.genre,
                    director:this.director,
                    yearRelease:this.yearRelease,
                    description:this.description
                },
            }
        );
    }
    static deleteById(id) {
        return getDb().collection("movies").deleteOne({ _id: new ObjectID(id) });
    }
}
