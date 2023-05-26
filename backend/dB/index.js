
const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://Amelsha:Amelsha123@cluster0.wp1pnph.mongodb.net/cev')


    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        console.log(err)
    })