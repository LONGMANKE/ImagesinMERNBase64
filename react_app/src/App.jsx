import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';
import avatar from './assets/profile.png'


const url = "http://localhost:8080/uploads"
function App() {


  const [postImage, setPostImage] = useState( { myFile : ""})

  const createPost = async (newImage) => {
    try{
      await axios.post(url, newImage)
    }catch(error){
      console.log(error)
    }
  }
   
  const handleSubmit =(e) =>{
    e.preventDefault();
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPostImage({ ...postImage, myFile : base64 })
  }

  return (
   <div className="App">
   <form onSubmit={() =>{}}>
   <label htmlFor="file-upload" className='custom-file-upload'>
                    <img src={postImage.myFile || avatar} alt="" />
        </label>
    <input 
    type="file"
    lable="image"
    name="myFile"
    id='file-upload'
    accept='.jpeg, .png, .jpg'
    onChange={(e) => handleFileUpload(e)} 
    />

    <h3>Simon Mburu</h3>
    <span>Designer</span>
    <button type='submit'>Submit</button>

   </form>
   </div>
  )
}

export default App

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}