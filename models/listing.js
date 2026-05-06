//collections are like folders inside the database. we can have multiple folders or collections inside the database which can store different types of data.
//The collection is created when you insert data







const mongoose = require("mongoose");                      //needed to define the schema and interact with mongodb
const Schema = mongoose.Schema;                            // short cut instead of writing mongoose.schema for creating a schema or structure of the data

const listingSchema = new Schema({                         // used to create a structure or schema of this data
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1759681770972-560b9949da0b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // if user does not give a image use the default one
        set: (v) => v == "" ? "https://images.unsplash.com/photo-1759681770972-560b9949da0b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        // ternary operator, if user send a empty string, put default picture or else put the image given
    }, 
    price: Number,
    location: String,
    country: String,
}); 


const Listing = mongoose.model("listing",listingSchema);         // creates a model in mongoose
                                                                 // Listing = the thing YOU use to talk to database
                                                                 // 'listings' is actual collection name in MongoDB, lowercase and plural
                                                                 // 'Listing' is the model used in javascript, created using mongoose
                                                                 // "await Listing.find({})" in code is converted to "db.listings.find({})" in database collections
                                                                 // in  database its converted from listing to listings
module.exports = Listing;                                        // exports this model or file to other files as well, we can use require to access it.
