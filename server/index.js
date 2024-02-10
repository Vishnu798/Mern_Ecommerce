const express = require('express')
const cors = require('cors')
const adminRoute = require('./Routes/admin_route')

const app = express()

express.json()
cors()

// app.get('/', function (req, res) {
//   res.send('Hello World test')
// })
app.use(adminRoute)

app.listen(5000,()=>{
    console.log("server started at 5000")
})

