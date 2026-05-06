//require("express") → downloading tools 🧰
//express() → building your shop 🏪
//app → your running shop (server)

//async means:
//This function can use await
//Returns a Promise

//A Promise is an object that represents the result of an asynchronous operation — either success or failure (in the future).

//Why await?
//Waits until connection is complete
//Prevents app from moving forward before DB is ready

//EJS as the bridge between your backend (Express.js) and the frontend (HTML).

//EJS = HTML + embedded JavaScript (runs on server). It has special commands such as <%= %>, etc.









const express = require("express");                       // exports express library into your project 
const app = express();                                    // it is a fn the creates a app object which represents my server. create my server using express
const mongoose = require("mongoose");                     // exports mongoose library into your project. Mongoose is a tool that helps you work with MongoDB easily using JavaScript.
const Listing = require("./models/listing.js");           // accessing the mongoose model called Listing. if we name it like 'const hotel', then hotel == Listing. (ex = await hotel.find({}); )
const path = require("path");                             //Loads Node’s built-in path. To work with file/folder paths safely.
const methodoverride = require("method-override");
const ejsmate = require("ejs-mate");



const MONGO_URL = "mongodb://127.0.0.1:27017/VacHotels";  //connection string for ongodb

main()
    .then(() => {                                         //if connection successfull print it
        console.log("connect to DB");
    })
    .catch((err) => {                                    //if not successfull print error
        console.log(err)
    });

async function main(){
    await mongoose.connect(MONGO_URL);                   //uses mongoose and connects the app to mongodb. it returns a promise whether the connection was successfull or not by using the main().
}

  
app.set("view engine", "ejs");                           //so that we can use it without writing .ejs (ex =  res.render("listings/new"); )
app.set("views",path.join(__dirname, "views"));          // it tells that all my ejs folders and inside the views folder
                                                         //__dirname = current project root. path.join(__dirname, "views") combines the root folder to the views folder accurately and safe way
app.use(express.urlencoded({extended: true}));
app.use(methodoverride("_method"));
app.engine('ejs',ejsmate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req,res) =>{
    res.send("hi, i am root");
});

// app.get("/testlisting", async (req,res) => {
//     let samplelisting = new Listing({
//         title: "my new villa",
//         description: "by the beach",
//         price: 1200,
//         location: "goa",
//         country: "india",
//     });

//     await samplelisting.save();           //we use await because we need to let the data be saved and then respond.
//     console.log("sample was saved");
    
//     res.send("successful testing");
// });




// SHOW ALL
app.get("/listings", async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index", { alllistings });
});

// NEW FORM (must come before :id)
app.get("/listings/new", (req,res) =>{
    res.render("listings/new");
});

// SHOW ONE (keep this after /listings/new)
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
});


//create route
app.post("/listings", async (req, res) => {
   const newlist = new Listing(req.body.listing);
   await newlist.save();
   res.redirect("/listings");
});


//edit route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});


//update route
app.put("/listings/:id", async (req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});


//delete route
app.delete("/listings/:id", async (req,res) =>{
    let {id} = req.params;
    let deletelist = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});


app.listen(8000, () =>{
    console.log("server is listening to port 8000");
});