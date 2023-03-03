import { useState, useEffect } from "react";

export default function ReactHookDemo1() {
    const [msg, setMsg] = useState();
    const [userDetails, setUserDetails] = useState({ UserId: '', Password: ''});

    const [users] = useState([
        { UserId: 'john_nit' }
    ]);
    const [password] = useState([
        { Passwd: 'john@11' }
    ])

    function handleSuccessClick() {
        setMsg(<SuccessComponent />)
    }

    function handleErrorClick() {
        setMsg(<ErrorComponent />)
    }

    function HandleUserName(e) {
        setUserDetails({
            UserId: e.target.value,
            Password: userDetails.Password,
        })
    }

    function HandlePassword(e) {
        setUserDetails({
            UserId: userDetails.UserId,
            Password: e.target.value,
        })
    }

    function VerifyUserIdAndPassword(){
        for (var user of users) {
            for(var pass of password )
            if (user.UserId === userDetails.UserId && pass.Passwd === userDetails.Password) {
                handleSuccessClick();
            }
            else {
                handleErrorClick();
            }
        }
    }

    return (
        <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd><input onChange={HandleUserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={HandlePassword} type="password" /></dd>
            </dl>
            <button onClick={VerifyUserIdAndPassword}>Login</button>
            <hr />
            <div>{msg}</div>
        </div>
    )
}

function SuccessComponent() {
    useEffect(() => {
        alert('Success Component Will Mount');
        return (() => {
            alert('Success Component will unmount');
        })
    }, [])

    return (
        <div>
            <h2>Login Success..</h2>
        </div>
    )
}

function ErrorComponent() {
    useEffect(() => {
        alert('Error Component will Mount');
        return (() => {
            alert('Error Component will unmount');
        })
    }, [])
    return (
        <div>
            <h2>Invalid Credentials</h2>
        </div>
    )
}