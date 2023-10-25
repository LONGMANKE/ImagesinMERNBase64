const express = require('express')


const app =express();
// app. use() function is used to mount the specified middleware function(s) at the path which is being specified
// express. json() function is a middleware function used in Express. js applications to parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers
app.use(express.json())

/



app.listen(5000, ()=>{
    console.log("Server is connected to port 5000")
})


