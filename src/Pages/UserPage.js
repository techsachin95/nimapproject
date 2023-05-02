import React, { useState, useRef } from 'react'
import Navbar from '../Components/HomePage_Components/Navbar'
import { useNavigate } from 'react-router-dom';
import './UserPage.css'
const UserPage = () => {

  //getting the change passord data
  const pass = useRef();

  //for navigation page
  const navigate = useNavigate()

  //showing input field when click on change password
  const [showpass, setshowpass] = useState(false)

  //logout function
  const logout = () => {
    localStorage.setItem("signUp", "hi");
    navigate("/");
  }

  //delete account function
  const delete1 = () => {
    localStorage.clear();
    navigate("/");
  }

  //change password function
  const changepassword = () => {
    setshowpass(true);
  }

  //save password function
  const [massage3, setmassage3] = useState("");

  const savepassword = () => {
    let regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    let inputepassword = pass.current.value;
    if (regexpassword.test(inputepassword)) {
      setmassage3("Userpassword Valid!");
      localStorage.setItem("password",pass.current.value);
      setshowpass(false);

  } else if (pass.current.value === "") {
      setmassage3("Please Enter Password");

  } else if (!regexpassword.test(inputepassword)) {
      setmassage3("Userpassword Invalid!" + "\n" + "userpassword contains minimum 8 characters and it allows at least one digit,one lower case character,one uppercase character");

  }
  }

  return (
    <>
      <Navbar />
      <div className="user">
        <h3>UserName : {localStorage.getItem("username")}</h3>

        {
          showpass ? <div><h3>Password :<input type="text" ref={pass} className='taskinput' /></h3><span style={{}}>{massage3}</span></div> : (<h3>Password : {localStorage.getItem("password")}</h3>)
        }

        {
          showpass ? <button onClick={savepassword} className='btn1'>Save Password</button> : <button onClick={changepassword} className='btn2'>Change Password</button>
        }
        <button onClick={logout} className='btn3'>logout</button>
        <button onClick={delete1} className='btn4'>Delete</button>
      </div>

    </>
  )
}

export default UserPage