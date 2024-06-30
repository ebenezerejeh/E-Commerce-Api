const express = require("express");
const dotenv = require("dotenv")
dotenv.config();



const app = express();

app.use(express.json());

const ProductsRoute = require('./Routes/Products.route');
app.use('/products',ProductsRoute)

app.use((req,res,next)=>{
    const err = new Error('not found')
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })