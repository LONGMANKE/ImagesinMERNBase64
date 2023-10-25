const express = require('express');
const connect = require('./database/conn.js');

const app = express();
// app. use() function is used to mount the specified middleware function(s) at the path which is being specified
// express. json() function is a middleware function used in Express. js applications to parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers
app.use(express.json())

app.get('/', (req, res) => {
    try {
        res.json("Home route")
    } catch (error) {
        res.json({ error })
    }
})


connect().then(() => {
    try {
        app.listen(5000, () => {
            console.log("Server is connected to port 5000");
        })
    }
    catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database connection...!"+ error)
})
