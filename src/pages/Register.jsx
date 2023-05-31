import React, { useState } from 'react'
import Add from "../img/addavatar.jfif"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth,storage}  from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [err,setErr]=useState(false)
  const navigate=useNavigate()




  const handleSubmit=async (e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

    // const auth = getAuth();
try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  

  // const storage = getStorage();
  const storageRef = ref(storage, displayName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  uploadTask.on(
    (error) => {
      setErr(true);
  
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        // console.log('File available at', downloadURL);
        await updateProfile(res,user,{
          displayName,photoURL:downloadURL  
        });

        await setDoc(doc(db,"users",res.user.uid),{
          uid:res.user.uid,
          displayName,
          email,
          photoURL:downloadURL,
        });
        await setDoc(doc(db,"userChats",res.user.uid),{});
        navigate("/");
      });
    }
  );

  
} catch(err){
  setErr(true);

} 
  
  
  }
  return (
    <div className='form-container'>
        <div className='formWrapper'>
            <span className="logo"> &nbsp;&nbsp;&nbsp;Chat Digital
            <span className='monu'>(Monu Chat)</span>
            </span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" className='input' placeholder='display name' /> <br />
                <input type="email" placeholder='email' /> <br />
                <input type="password" placeholder='password' />  <br />
                <input style={{display:"none"}} type="file" id="file" /> 
                <label htmlFor="">
                  <img className='imgg' src={Add} alt="" />
                  <span>Add an avatar</span>
                </label> <br />
                <button>Sign Up</button>
                {err && <span>Something Went Wrong</span>}

            </form>
            <p>You do have an account?Login </p>
        </div>
    </div>
  )
}

export default Register