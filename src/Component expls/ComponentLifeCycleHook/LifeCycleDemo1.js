import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount(){
        alert('Success Component will render');
    }
    componentWillUnmount(){
        alert('Success Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Login Success</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component {
    componentDidMount(){
        alert('Error Component will render');
    }
    componentWillUnmount(){
        alert('Error Component will unmount');
    }
    render(){
        return(
            <div>
                <h2>Invalid Login</h2>
            </div>
        )
    }
}

export default class LifeCycleDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails:{
                Username: 'john_nit',
                Password: 'john@11'
            },
            formDetails:{
                Username: '',
                Password: ''
            },
            result:''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleloginClick = this.handleloginClick.bind(this);
    }

    handleUserName(event){
        this.setState({
            formDetails:{
                Username: event.target.value,
                Password: this.state.formDetails.Password
            }
        })
    }

    handlePassword(event){
        this.setState({
            formDetails:{
                Username: this.state.formDetails.Username,
                Password: event.target.value
            }
        })
    }

    handleloginClick(){
        if(this.state.formDetails.Username === this.state.userDetails.Username && this.state.formDetails.Password === this.state.userDetails.Password){
            alert('Success Component will invoke');
            this.setState({
                result: <SuccessComponent />
            })
        }
        else{
            this.setState({
                result: <ErrorComponent />
            })
        }        
    }

    render() {
        return (
            <div className="container">
                <dl>
                    <dt>UserName</dt>
                    <dd><input onChange={this.handleUserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="password"/></dd>
                </dl>
                <button onClick={this.handleloginClick}>Login</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}