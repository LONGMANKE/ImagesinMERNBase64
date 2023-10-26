const express = require('express');
const connect = require('./database/conn.js');


//mport model
const postSchema = require('./model/postModel.')

const app = express();
// app. use() function is used to mount the specified middleware function(s) at the path which is being specified
// express. json() function is a middleware function used in Express. js applications to parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers
app.use(express.json());
const port = process.env.PORT || 8080;





//get http://localhost:8080

app.get('/', (req, res) => {
    try {
        // res.json("Home route")
        Post.find({}).then(data=>{
            res.json(data)
        }).catch(error =>{
            res.status(408).json({error})
        })
    } catch (error) {
        res.json({ error })
    }
})

//Post http://localhost:8080/uploads

app.post("/uploads", async (req, res) => {
    const body = req.body;
    try {
        const newImage = await Post.create(body)
        newImage.save();
        res.status(201).json({msg: "New image uploaded...!"})
    }catch(error){
        res.status(409).json({message : error.message})
    }
})

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch((error) => {
    console.log("Invalid Database connection...!")
})
