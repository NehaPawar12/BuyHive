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
import cors from 'cors'



//Configure env
dotevn.config()

//db config
connectDB()

//rest obj
const App = express()


//middlewares
App.use(cors())
App.use(express.json())
App.use(morgan('dev'))

//routes
App.use('/api/v1/auth',authRoutes)
App.use('/api/v1/category',categoryRoutes)
App.use('/api/v1/product',productRoutes)

//rest api
App.get('/', (req,res) => {
    // res.send({
    //     message:"Welcome to E-commerce App"
    // })
    res.send('<h1>Welcome To BuyHive</h1>')
})

//PORT
const PORT = process.env.PORT || 8000;

//run listen
App.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`)
})