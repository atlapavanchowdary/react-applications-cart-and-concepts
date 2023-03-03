import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCaptchaHook } from "../ReactHook/UseCaptchaHook";

export default function UserLoginDemo(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({UserName:'', Password:''});

    const code = useCaptchaHook();

    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }

    function handlePassword(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }

    function handleLogin(){
        setCookie("username",userDetails.UserName, {path:"/",expires: new Date("2023-07-02")});
        alert("Login Success..");
    }

    function handleSignout(){
        removeCookie("username");
        alert("signed out Successfully..");
    }

    function handleCodeChange(){
        window.location.reload();
    }

    useEffect(()=>{
        if(cookies.username === undefined){
            alert("Please Login");
        }
    },[]);

    return(
        <div className="container-fluid">
            <h2>UserLogin</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={handleUserName} type="text"/></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password"/></dd>
                <dt>Verfiy Code <button onClick={handleCodeChange}>New Code</button></dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr/>

            <div>
                <h3>Home<button onClick={handleSignout} className="btn btn-link">Signout</button></h3>
                Hello!{cookies.username}
            </div>
        </div>
    )
}