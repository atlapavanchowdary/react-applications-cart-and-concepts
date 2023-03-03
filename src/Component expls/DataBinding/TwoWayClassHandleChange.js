import React from "react";

export default class ClassHandleChange extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            UserName: 'John'
        }
    }

    handleUserChange(e){
        this.setState({
            UserName: e.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <h2>User Details</h2>
                <input type="text" onChange={this.handleUserChange.bind(this)}/>
                <br/>
                <p>Hello!{this.state.UserName}</p>
            </div>
        )
    }
}