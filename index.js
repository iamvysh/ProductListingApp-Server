const express = require('express')
const mongoose=require("mongoose")
const app = express()
const port = process.env.PORT || 3001;
const cors=require("cors")
const dotenv=require ("dotenv")


dotenv.config()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())





// Import routes
const categoriesRoutes = require('./Routes/CategoryRoute');
const productsRoutes = require('./Routes/ProductRoute');

app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);





//-------------mongodb connection setup-----------

const mongoDB = process.env.MONGODB_URL  ;


main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(mongoDB);
  console.log("db connected");
}


// --------------------------




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})