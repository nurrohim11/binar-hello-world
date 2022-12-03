const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (request, response) =>{
  response.json({
    message:'Health check success'
  })
})

app.listen(port, () =>{
  console.log(`server running at port ${port}`)
})