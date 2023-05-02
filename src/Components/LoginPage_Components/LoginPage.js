import React, { useEffect, useRef, useState } from 'react'
import HomePage from '../../Pages/HomePage';
import './LoginPage.css'
const LoginPage = () => {
    const username1 = useRef();
    const email1 = useRef();
    const password1 = useRef();

    const [showhome, setshowhome] = useState(false);
    const [showsignin, setshowsignin] = useState(false);

    const localsignUp = localStorage.getItem("signUp");
    const localemail = localStorage.getItem("email");
    const localpassword = localStorage.getItem("password");
    const localusername = localStorage.getItem("username");

    const [massage1, setmassage1] = useState("");
    const [massage2, setmassage2] = useState("");
    const [massage3, setmassage3] = useState("");


    useEffect(() => {
        if (localsignUp) {
            setshowhome(true);
        }
        // if(localusername!==null){
        //     setshowhome(true);

        // }
        if (localemail) {
            setshowsignin(true)
        }
    }, [])

    const signup = () => {
        // username,email,password varification
        let regexusername = /[A-Za-z0-9.@_]{8,}$/
        let inputusername = username1.current.value;
        let regexemail = /^[a-zA-Z0-9._]+@[a-z]+(?:\.[a-z]+)*$/
        let inputemail = email1.current.value;
        let regexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        let inputepassword = password1.current.value;
        //username validation
        if (regexusername.test(inputusername)) {
            setmassage1("Username Valid!");
        } else if (username1.current.value === "") {
            setmassage1("Please Enter Username");
            username1.current.focus();
        } else if (!regexusername.test(inputusername)) {
            setmassage1("username contains minimum 8 characters and it may allows only alphabets,numbers,@,.,_ symbolls")
            username1.current.focus();

        }

        //email validation
        if (regexemail.test(inputemail)) {
            setmassage2("User Email Valid!");

        } else if (email1.current.value === "") {
            setmassage2("Please Enter Email");

        } else if (!regexemail.test(inputemail)) {
            setmassage2("before @ useremail contains only lower case alphbets,uppercase alphbets,numbers,.,_ and after @ it only contains lowwer case");
        }

        //password validation
        if (regexpassword.test(inputepassword)) {
            setmassage3("Userpassword Valid!");

        } else if (password1.current.value === "") {
            setmassage3("Please Enter Password");

        } else if (!regexpassword.test(inputepassword)) {
            setmassage3("Userpassword Invalid!" + "\n" + "userpassword contains minimum 8 characters and it allows at least one digit,one lower case character,one uppercase character");

        }

        //save all details of fegistration into local storage
        if (regexusername.test(inputusername) && regexemail.test(inputemail) && regexpassword.test(inputepassword)) {
            localStorage.setItem("username", username1.current.value);
            localStorage.setItem("email", email1.current.value);
            localStorage.setItem("password", password1.current.value);
            localStorage.setItem("signUp", email1.current.value);
            alert("account created successfully")
            window.location.reload();
        }
    }

    const signin = () => {
        if (email1.current.value == localemail && password1.current.value == localpassword) {
            localStorage.removeItem("signUp", email1.current.value);
            window.location.reload()
        } else {
            alert("please enter valid email and password");
        }
    }
    return (
        <div>
            {
                showhome ?
                    (<div className="signin">
                        <h1>please signIn!</h1>
                        <p>hi {localusername}</p>
                        <input type="email" placeholder='Enter the email' ref={email1} required /><br />
                        <input type="password" placeholder='Enter the password' ref={password1} required /><br />
                        <input type="submit" value='SignIn' onClick={signin} className='signinbtn' />
                    </div>) :
                    (showsignin ?
                        <HomePage />
                        :
                        (<div className="signup">
                            <h1>please signUp!</h1>
                            <input type="text" placeholder='Enter the username' ref={username1} required /><br />
                            <span>{massage1}</span> 
                            <input type="email" placeholder='Enter the email' ref={email1} required /><br />
                            <span>{massage2}</span>
                            <input type="password" placeholder='Enter the password' ref={password1} required /><br />
                            <span>{massage3}</span>
                            <input type="submit" value='SignUp' onClick={signup} className='signupbtn' />
                        </div>))
            }
        </div>
    )
}

export default LoginPage