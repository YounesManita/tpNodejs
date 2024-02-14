const express=require("express")
const app=express()
const path = require('path');
const login = require("./routers/login")
const post = require("./routers/post")

app.use(express.json())
app.use("/auth",login)
app.use("/post", post)



app.listen(3000,()=>{console.log('Server is running on port 3000')})