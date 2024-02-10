const express = require('express')
const cors = require('cors')
const adminRoute = require('./Routes/admin_route')

const app = express()
app.use(cors())
app.use(express.json())


app.use(adminRoute)

app.listen(5000,()=>{
    console.log("server started at 5000 ")
})

