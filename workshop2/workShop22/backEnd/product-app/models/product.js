const getDb = require("../util/database").getDB;
const {ObjectId} = require("mongodb");
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
    
    constructor(_id, name,price,model,rating,manufacturer,description,reviews=[]) {
        this._id = _id;
        this.name=name;
        this.price=price;
        this.model=model;
        this.rating=rating;
        this.manufacturer=manufacturer;
        this.description=description
        this.reviews=reviews
    }
    save() {
        return getDb().collection("products").insertOne(this);
    }
    static findAll() {
        return getDb().collection("products").find().toArray();
    }
    static findById(id) {
        return getDb()
            .collection("products")
            .findOne({ _id: new ObjectId(id) });
    }
    update() {
        return getDb().collection("products").updateOne(
            { _id:new ObjectId(this._id)},//ObjectId
            {
                $set: {
                    name:this.name,
                    price:this.price,
                    rating:this.rating,
                    model:this.model,
                    manufacturer:this.manufacturer,
                    description:this.description,
                    reviews:this.reviews
                },
            }
        );
    }
    updateReviw() {
        return getDb().collection("products").updateOne(
            { _id:new ObjectId(this._id)},//ObjectId
            {
                $set: {
                    name:this.name,
                    price:this.price,
                    rating:this.rating,
                    model:this.model,
                    manufacturer:this.manufacturer,
                    description:this.description,
                    reviews:this.reviews
                },
            }
        );
    }
    static deleteById(id) {
        return getDb().collection("products").deleteOne({ _id: new ObjectId(id) });
    }
}
