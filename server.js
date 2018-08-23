const express =require('express')
const mongoose =require('mongoose')
const bodyParser= require('body-parser')
 const {PORT_SERVER } =require('./config/config')
 const Product =require('./model/product')
const app =express()

//middleware to parse form
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//prube
app.get('/product',(req, res)=>{
    res.status(200).json({
        err: false,
        users: {Product}
    })
  })

  

  app.post('/product',(req, res)=>{
      let body=req.body;
    
  })


  app.put('/product',(req, res)=>{
    res.status(200).json({
        err: false,
        message: 'Hola desde nodejs'
    })
  })


  app.delete('/product',(req, res)=>{
    res.status(200).json({
        err: false,
        message: 'Hola desde nodejs'
    })
  })

  






mongoose.connect('mongodb://localhost/tienda',function(err){
    app.listen(PORT_SERVER,()=>{
        console.log(`Escuchando por el puerto ${PORT_SERVER}`)
    });
});

