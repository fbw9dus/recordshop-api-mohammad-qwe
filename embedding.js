const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect("mongodb://localhost:27017//bakery",{useNewUrlParser: true})

mongoose.once('open', function() {
    console.log("Database connection established")
  })
const BreadSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    nutritionFacts: {
        calories: Number,
        carbs: Number,
        proten: Number,
        fat: Number
    }
})
const Bread = mongoose.model('Bread', BreadSchema)

(async () => {
   const bauernbrot = Bread.create({
       productName: "Bauernbrot",
       weight: 1000,
       category: "Sauerteigbrot",
       nutritionFacts: {
           calories: 160,
           carbs: 45,
           proten: 10,
           fat: 1
       }
   }) 
   const collectionData = await Bread.find()
   console.log(collectionData)
})()
