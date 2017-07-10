const express = require('express')
const next = require('next')
const mongoose = require('mongoose')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const Pedidos = require('./models/Stores')

app.prepare()
.then(() => {
  const server = express()
  const promise = mongoose.connect('mongodb://localhost/myserver-dev',{
      useMongoClient:true
  })
  
  promise.then((db)=>{
      console.log("conected to ")
  })
  promise.catch(err=>{throw err})
 

  server.get('/about/:id',(req,res)=>{
    const actualPage = '/about'
    const queryParams = {titulo:req.params.id}
    app.render(req,res,actualPage,queryParams)
  })
  server.get('/pedidos',async (req,res)=>{
        const stores = await Pedidos.find()
      res.json(stores)
      //app.render(req,res,'/jobs',queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})