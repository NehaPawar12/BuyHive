import express from 'express'
import colors from 'colors'
import dotevn from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
// import { JS_INT_MAX } from './node_modules/bson/src/constants';
// const colors = require('colors')
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';



//Configure env
dotevn.config()

//db config
connectDB()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//rest obj
const App = express()


//middlewares
App.use(cors())
App.use(express.json())
App.use(morgan('dev'))
App.use(express.static(path.join(__dirname, './client/build')))

//routes
App.use('/api/v1/auth',authRoutes)
App.use('/api/v1/category',categoryRoutes)
App.use('/api/v1/product',productRoutes)

//rest api
App.use('*',function(req, res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))

})

//PORT
const PORT = process.env.PORT || 8000;

//run listen
App.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})