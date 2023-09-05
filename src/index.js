import express from "express"
import configViewEngine from "./config/viewEngine"
import initWebRoute from "./route/web"
import bodyParser from "body-parser"
import connectDB from "./config/connectDB"
require('dotenv').config();

const app = express()



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup view engine
configViewEngine(app);

//init web route
initWebRoute(app);


connectDB();

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})