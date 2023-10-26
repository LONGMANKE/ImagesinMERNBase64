const express = require('express');
const connect = require('./database/conn.js');

const app = express();
// app. use() function is used to mount the specified middleware function(s) at the path which is being specified
// express. json() function is a middleware function used in Express. js applications to parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers
app.use(express.json());
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    try {
        res.json("Home route")
    } catch (error) {
        res.json({ error })
    }
})


connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is connected to http://localhost:${port}`);
        })
    }catch (error) { 
        console.log("Cannot connect to the server");
    }
}).catch((error) => { 
    console.log("Invalid Database connection...!")
})
